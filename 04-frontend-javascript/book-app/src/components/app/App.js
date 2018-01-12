import Template from '../Template';
import html from './app.html';
import './app.css';
import Search from '../search/Search';
import Paging from '../search/Paging';
import BookList from '../books/BookList';
import { searchBooks } from '../../services/booksApi';

const template = new Template(html);

export default class App {

  handleSearch(searchTerm) {
    this.searchTerm = searchTerm;
    this.pageIndex = 0;
    this.runSearch()
  }

  handlePaging(pageIndex) {
    this.pageIndex = pageIndex;
    this.runSearch();
  }

  runSearch() {

    this.loading.classList.remove('hidden');

    searchBooks(this.searchTerm, this.pageIndex)
      .then(data => {
        const books = data.items;
        const total = data.totalItems;
        
        const booksSection = this.booksSection;

        while(booksSection.hasChildNodes()) {
          booksSection.removeChild(booksSection.lastChild);
        }

        const bookList = new BookList(books);
        booksSection.appendChild(bookList.render());

        this.paging.update(this.pageIndex, 40, total);
        this.loading.classList.add('hidden');
      });
  }

  render() {
    const dom = template.render();

    this.loading = dom.getElementById('loading');
    this.booksSection = dom.getElementById('books');

    const searchSection = dom.getElementById('search');
    const search = new Search(searchTerm => this.handleSearch(searchTerm));
    searchSection.appendChild(search.render());

    const pagingSection = dom.getElementById('paging');
    this.paging = new Paging(pageIndex => this.handlePaging(pageIndex));
    pagingSection.appendChild(this.paging.render());

    return dom;
  }
}
