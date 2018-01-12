import html from './book.html';
import './book.css';
import Template from '../Template';

const template = new Template(html);

export default class Book {
  constructor(book) {
    this.volume = book.volumeInfo;
  }

  render() {
    const dom = template.render();
    const volume = this.volume;

    dom.querySelector('.title').textContent = volume.title;
    dom.querySelector('.author').textContent = volume.authors.length ? volume.authors[0] : '';
    dom.querySelector('.publisher').textContent = volume.publisher;
    dom.querySelector('.publishedDate').textContent = volume.publishedDate;
    dom.querySelector('.description').textContent = volume.description;
    
    const img = dom.querySelector('.thumbnail');
    if(volume.imageLinks) {
      img.setAttribute('src', volume.imageLinks.thumbnail);
      img.setAttribute('alt', `${volume.title} by ${volume.authors[0]}`);
    } 
    else {
      img.classList.add('hidden');
    }

    return dom;
  }
}