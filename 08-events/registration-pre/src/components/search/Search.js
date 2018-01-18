import html from './search.html';
import './search.css';
import Template from '../Template';

const template = new Template(html);

export default class Search {
  constructor(onSearch) {
    this.onSearch = onSearch;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.onSearch(this.searchInput.value);
  }

  render() {
    const dom = template.clone();
    this.searchInput = dom.querySelector('input');

    const form = dom.querySelector('form');
    form.addEventListener('submit', event => this.handleSubmit(event));
    
    return dom;
  }
}