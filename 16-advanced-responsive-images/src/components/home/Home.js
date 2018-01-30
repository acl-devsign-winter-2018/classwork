import Template from '../Template';
import html from './home.html';
import './home.css';

import { getURL } from '../../services/cloudinary';

const template = new Template(html);

export default class Home {

  constructor(aspectRatios, breakpoints, fileName, alt) {
    this.aspectRatios = ['3:1', '5:2', '2:1', '3:2', '1:1'];
    this.breakpoints = [2000, 1500, 1200, 900, 600];
    this.fileName = 'wheatfield-with-crows-vincent-van-gogh-1890_nb7qd7.jpg';
    this.alt = 'Vincent Van Gogh, Wheatfield With Crows, 1890';
  }

  createSplash(aspectRatios, breakpoints, fileName, alt) {
    let pictureTxt = '';
    for(let i = 0; i < aspectRatios.length; i++) {
      const imgOptions = `c_fill,g_auto,q_auto,ar_${aspectRatios[i]},w_${breakpoints[i]}`;
      const imgURL = getURL(fileName, imgOptions);
      
      const retinaOptions = `c_fill,g_auto,q_auto,ar_${aspectRatios[i]},w_${breakpoints[i] * 2}`;
      const retinaURL = getURL(fileName, retinaOptions);
      
      if(i < aspectRatios.length - 1) {
        pictureTxt += `<source media="(min-width: ${breakpoints[(i + 1)]}px)" srcset="${imgURL}, ${retinaURL} 2x">`;
      } else {
        pictureTxt += `<img srcset="${imgURL}, ${retinaURL} 2x" alt="${alt}">`;
      }
    }
    return pictureTxt;
  }

  render() {
    const dom = template.clone();
    dom.querySelector('picture').innerHTML = this.createSplash(this.aspectRatios, this.breakpoints, this.fileName, this.alt);
    return dom;
  }

  unrender() {
    // no-op
  }
}
