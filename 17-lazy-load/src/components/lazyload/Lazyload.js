import html from './lazyload.html';
import Template from '../Template';
import { getURL } from '../../services/cloudinary';

const template = new Template(html);

export default class Lazyload {
  constructor(imgObj) {
    this.imgObj = imgObj;
  }

  getLoResImages(imgObj, dom) {
    const loResWidth = Math.round(imgObj.width / 100);
    const loResHeight = Math.round(imgObj.height / 100);
    const loResOptions = `${imgObj.options},w_${loResWidth},h_${loResHeight},e_blur:600`;
    const loResURL = getURL(imgObj.fileName, loResOptions);
    dom.querySelector('.loRes').src = loResURL;
    dom.querySelector('figcaption').innerHTML = imgObj.caption;
  }

  render() {
    const dom = template.clone();
    this.getLoResImages(this.imgObj, dom);
    return dom;
  }
}