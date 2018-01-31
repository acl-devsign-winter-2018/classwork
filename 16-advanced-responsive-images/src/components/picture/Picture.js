import html from './picture.html';
import Template from '../Template';
import { getURL } from '../../services/cloudinary';

const template = new Template(html);

export default class Picture {
  constructor(cloudinaryObj) {
    this.cloudinaryObj = cloudinaryObj;
  }

  createPicture(cloudinaryObj) {
    let pictureHTML = '';

    for(let i=0; i < cloudinaryObj.aspectRatios.length; i++) {
      const imgOptions = `${cloudinaryObj.options},ar_${cloudinaryObj.aspectRatios[i]},w_${cloudinaryObj.breakpoints[i]}`;
      const imgURL = getURL(cloudinaryObj.fileName, imgOptions);
      
      const retinaOptions = `${cloudinaryObj.options},ar_${cloudinaryObj.aspectRatios[i]},w_${cloudinaryObj.breakpoints[i] * 2}`;
      const retinaURL = getURL(cloudinaryObj.fileName, retinaOptions);

      if(i < cloudinaryObj.aspectRatios.length - 1) {
        // if this is NOT the last image in the array, output the <source> element
        pictureHTML += `<source media="(min-width: ${cloudinaryObj.breakpoints[(i + 1)]}px)" srcset=${imgURL}, ${retinaURL} 2x">`;
      } else {
        // if this IS the last image, output the <img> element
        pictureHTML += `<img srcset="${imgURL}, ${retinaURL} 2x" alt="${cloudinaryObj.alt}">`;
      }
    }
    return pictureHTML;
  }

  render() {
    const dom = template.clone();
    dom.querySelector('picture').innerHTML = this.createPicture(this.cloudinaryObj);
    return dom;
  }
}