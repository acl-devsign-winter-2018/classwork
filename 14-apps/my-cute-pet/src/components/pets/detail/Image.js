import html from './image.html';
import Template from '../../Template';
import { getUrl } from '../../../services/cloudinary';

const template = new Template(html);

export default class Image {
  constructor(src) {
    this.src = src;
  }

  render() {
    const dom = template.clone();
    dom.querySelector('img').src = getUrl(this.src, 'c_scale,w_100');
    return dom;
  }
}