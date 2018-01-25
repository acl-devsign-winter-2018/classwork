import html from './image.html';
import Template from '../../Template';

const template = new Template(html);

export default class Image {
  constructor(src) {
    this.src = src;
  }

  render() {
    const dom = template.clone();
    dom.querySelector('img').src = this.src;
    return dom;
  }
}