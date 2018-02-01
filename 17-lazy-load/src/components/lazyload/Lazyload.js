import html from './lazyload.html';
import Template from '../Template';
import { getURL } from '../../services/cloudinary';

const template = new Template(html);

export default class Lazyload {
  constructor(imgObj) {
    this.imgObj = imgObj;
  }

  getLoResImage(imgObj, dom) {
    const loResWidth = Math.round(imgObj.width / 100);
    const loResHeight = Math.round(imgObj.height / 100);
    const loResOptions = `${imgObj.options},w_${loResWidth},h_${loResHeight},e_blur:600`;
    const loResURL = getURL(imgObj.fileName, loResOptions);
    dom.querySelector('.loRes').src = loResURL;
    dom.querySelector('figcaption').innerHTML = imgObj.caption;
  }

  getHiResImage(imgObj, dom) {
    // create array of image widths to use with srcset. http://bit.ly/1FLxY3E
    const imgSizes = [500, 1000, 1500, 2000, 2500];
    let hiResHTML = '';
    for(let i = 0; i < imgSizes.length; i++) {
      const hiResOptions = `${imgObj.options},w_${imgSizes[i]}`;
      const hiResURL = getURL(imgObj.fileName, hiResOptions);
      if(i === 0) {
        hiResHTML += `<img src="${hiResURL}" srcset="`;
      } else if(i < imgSizes.length - 1) {
        hiResHTML += `${hiResURL} ${imgSizes[i]}w, `;
      } else {
        hiResHTML += `${hiResURL} ${imgSizes[i]}w" alt="${imgObj.alt}">`;
      }
    }
    dom.querySelector('.hiRes').innerHTML = hiResHTML;
  }

  render() {
    const dom = template.clone();
    this.getLoResImage(this.imgObj, dom);
    this.getHiResImage(this.imgObj, dom);
    return dom;
  }
}