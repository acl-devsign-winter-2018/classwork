import html from './paging.html';
import './paging.css';
import Template from '../../Template';

const template = new Template(html);

export default class Paging {
  constructor(onPage) {
    this.onPage = onPage;
  }

  update(pageIndex, perPage, total) {
    const totalPages = Math.floor(total / perPage);
    this.total.textContent = `showing page ${pageIndex + 1} of ${totalPages} (${total} total results)`;
    this.pageIndex = pageIndex;
    this.previous.disabled = pageIndex <= 0;
    this.next.disabled = pageIndex >= total;
  }

  render() {
    const dom = template.clone();
    
    this.total = dom.querySelector('.total');
    this.previous = dom.querySelector('.prev');
    this.next = dom.querySelector('.next');

    this.previous.addEventListener('click', () => this.onPage(this.pageIndex - 1));
    this.next.addEventListener('click', () => this.onPage(this.pageIndex + 1));

    return dom;
  }
}