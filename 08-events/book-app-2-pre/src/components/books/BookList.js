import html from './book-list.html';
import Template from '../Template';
import Book from './Book';

const template = new Template(html);

export default class BookList {
  constructor(books) {
    this.books = books;
  }

  render() {
    const dom = template.clone();
    const ul = dom.querySelector('ul');

    this.books
      .map(book => new Book(book))
      .map(bookComponent => bookComponent.render())
      .forEach(bookDom => ul.appendChild(bookDom));

    return dom;
  }
}