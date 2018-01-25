import Template from '../../Template';
import html from './pet-detail.html';
import './pet-detail.css';
import Images from './Images';
import { db, storage } from '../../../services/firebase';

const template = new Template(html);
const pets = db.ref('pets');
const petsImages = db.ref('pet-images');
const petImageStorage = storage.ref('pets');

export default class PetDetail {
  constructor(key) {
    this.key = key;
    this.pet = pets.child(key);
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

  render() {
    const dom = template.clone();

    const header = dom.querySelector('h2');

    this.onValue = this.pet.on('value', data => {
      const pet = data.val();
      header.textContent = `${pet.name} the ${pet.type}`;
    });

    this.fileInput = dom.querySelector('input[type=file]');
    this.fileInput.addEventListener('change', event => {
      const { files } = event.target;
      if(!files || !files.length) return;
      this.handleUpload(files[0]);
    });

    this.images = new Images(this.key);
    dom.querySelector('section.images').append(this.images.render());


    return dom;
  }

  unrender() {
    pets.child(this.key).off('value', this.onValue);
    this.images.unrender();
  }
}