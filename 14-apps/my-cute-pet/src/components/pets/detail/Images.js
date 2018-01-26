import Template from '../../Template';
import html from './images.html';
import Image from './Image';
import { db, storage } from '../../../services/firebase';

const template = new Template(html);
const petsImages = db.ref('pet-images');
const petImageStorage = storage.ref('pets');

export default class Images {
  constructor(key) {
    this.petImages = petsImages.child(key);
    this.imageStorage = petImageStorage.child(key);
  }

  handleUpload(file) {
    const petImage = this.petImages.push();
    const uploadTask = this.imageStorage.child(petImage.key).put(file);
    
    uploadTask.on('state_changed', (/*snapshot*/) => {
      // progress, pause and cancel events
    }, err => {
      // something went wrong :(
      console.error(err);
    }, () => {
      // success! now let's get the download url...
      const downloadUrl = uploadTask.snapshot.downloadURL;
      this.fileInput.value = null;
      petImage.set(downloadUrl);
    });
  }

  handleEmbed(url) {
    const petImage = this.petImages.push();
    petImage.set(url);
  }

  handleRemove(imageKey) {
    this.petImages.child(imageKey).remove();
    const storage = this.imageStorage.child(imageKey);
    storage.delete()
      .catch(err => {
        if(err.code === 'storage/object-not-found') return;
        console.error(err);
      });
  }

  render() {
    const dom = template.clone();
    
    this.fileInput = dom.querySelector('input[type=file]');
    this.fileInput.addEventListener('change', event => {
      const files = event.target.files;
      if(!files || !files.length) return;
      this.handleUpload(files[0]);
    });

    const embedForm = dom.querySelector('form');
    embedForm.addEventListener('submit', event => {
      event.preventDefault();
      this.handleEmbed(event.target.elements.url.value);
    });

    const ul = dom.querySelector('ul');
    const map = new Map();

    this.childAdded = this.petImages.on('child_added', data => {
      const image = new Image(data.val(), () => this.handleRemove(data.key));
      const imageDom = image.render();
      map.set(data.key, {
        nodes: [...imageDom.childNodes],
        component: image
      });
      ul.appendChild(imageDom);
    });

    this.childRemoved = this.petImages.on('child_removed', data => {
      const toRemove = map.get(data.key);
      toRemove.nodes.forEach(node => node.remove());
      // toRemove.component.unrender();
    });

    return dom;
  }

  unrender() {
    this.petImages.on('child_added', this.childAdded);
    this.petImages.on('child_removed', this.childRemoved);
  }
}