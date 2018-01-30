import html from './picture.html';
import Template from '../Template';
import { getURL } from '../../services/cloudinary';

const template = new Template(html);

export default class Picture {
  constructor(cloudinaryObj) {
    this.cloudinaryObj = cloudinaryObj;
  }

  createPicture(cloudinaryObj) {
    let pictureTxt = '';
    for(let i = 0; i < cloudinaryObj.aspectRatios.length; i++) {
      const imgOptions = `${cloudinaryObj.options},ar_${cloudinaryObj.aspectRatios[i]},w_${cloudinaryObj.breakpoints[i]}`;
      const imgURL = getURL(cloudinaryObj.fileName, imgOptions);
      
      const retinaOptions = `${cloudinaryObj.options},ar_${cloudinaryObj.aspectRatios[i]},w_${cloudinaryObj.breakpoints[i] * 2}`;
      const retinaURL = getURL(cloudinaryObj.fileName, retinaOptions);
      
      if(i < cloudinaryObj.aspectRatios.length - 1) {
        pictureTxt += `<source media="(min-width: ${cloudinaryObj.breakpoints[(i + 1)]}px)" srcset="${imgURL}, ${retinaURL} 2x">`;
      } else {
        pictureTxt += `<img srcset="${imgURL}, ${retinaURL} 2x" alt="${cloudinaryObj.alt}">`;
      }
    }
    return pictureTxt;
  }

  render() {
    const dom = template.clone();
    dom.querySelector('picture').innerHTML = this.createPicture(this.cloudinaryObj);
    return dom;
  }
}