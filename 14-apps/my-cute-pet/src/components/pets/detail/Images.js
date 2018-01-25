import Template from '../../Template';
import html from './images.html';
import './images.css';
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

  handleRemove(imageKey) {
    this.petImages.child(imageKey).remove();
    this.imageStorage.child(imageKey).delete();
  }

  render() {
    const dom = template.clone();
    
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