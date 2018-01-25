import Template from '../../Template';
import html from './pet.html';
import './pet.css';
import { db } from '../../../services/firebase';
import { getUrl } from '../../../services/cloudinary';


const template = new Template(html);
const petsImages = db.ref('pet-images');

export default class Pet {
  constructor(key, pet) {
    this.key = key;
    this.pet = pet;
    this.petImages = petsImages.child(key).limitToFirst(1);
  }

  update(pet) {
    this.caption.textContent = `${pet.name} the ${pet.type}`;
  }

  render() {
    const dom = template.clone();
    dom.querySelector('a').href = `#pets/${this.key}`;
    this.caption = dom.querySelector('h2');
    this.update(this.pet);

    const image = dom.querySelector('img');
    this.onValue = this.petImages.on('child_added', data => {
      image.src = getUrl(data.val(), 'c_scale,w_75');
    });

    return dom;
  }

  unrender() {
    this.petImages.off('child_added', this.onValue);
  }
}