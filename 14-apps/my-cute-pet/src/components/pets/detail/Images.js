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

  handleRemove(imageKey) {
    this.petImages.child(imageKey).remove();
    this.imageStorage.child(imageKey).delete();
  }

  render() {
    const dom = template.clone();
    
    this.fileInput = dom.querySelector('input[type=file]');
    this.fileInput.addEventListener('change', event => {
      const { files } = event.target;
      if(!files || !files.length) return;
      this.handleUpload(files[0]);
    });

    const ul = dom.querySelector('ul');
    const map = new Map();

    this.childAdded = this.petImages.on('child_added', data => {
      const image = new Image(data.val(), () => this.handleRemove(data.key));
      const imageDom = image.render();
      map.set(data.key, [...imageDom.childNodes]);
      ul.appendChild(imageDom);
    });

    this.childRemoved = this.petImages.on('child_removed', data => {
      map.get(data.key).forEach(node => node.remove());
    });

    return dom;
  }

  unrender() {
    this.petImages.on('child_added', this.childAdded);
    this.petImages.on('child_removed', this.childRemoved);
  }
}