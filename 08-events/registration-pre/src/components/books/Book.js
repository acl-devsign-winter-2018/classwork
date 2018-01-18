import html from './book.html';
import './book.css';
import Template from '../Template';

const template = new Template(html);

const getAuthors = authors => {
  if(!authors || !authors.length) return '';
  if(authors.length === 1) return authors[0];
  return authors.join(', ');
};

export default class Book {
  constructor(book) {
    this.volume = book.volumeInfo;
  }

  render() {
    const dom = template.clone();
    const volume = this.volume;

    const authors = getAuthors(volume.authors);

    dom.querySelector('.title').textContent = volume.title;
    dom.querySelector('.author').textContent = authors;
    dom.querySelector('.publisher').textContent = volume.publisher;
    dom.querySelector('.publishedDate').textContent = volume.publishedDate;
    dom.querySelector('.description').textContent = volume.description;
    
    const img = dom.querySelector('.thumbnail');
    if(volume.imageLinks) {
      img.setAttribute('src', volume.imageLinks.thumbnail);
      img.setAttribute('alt', `${volume.title} ${authors ? `by ${authors}` : ''}`);
    } 
    else {
      img.classList.add('hidden');
    }

    return dom;
  }
}