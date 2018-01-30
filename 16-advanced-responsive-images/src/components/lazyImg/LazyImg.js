import html from './lazyimg.html';
// import './lazyimg.css';
import Template from '../Template';
import { getURL } from '../../services/cloudinary';

const template = new Template(html);

export default class LazyImg {
  constructor(imgObj) {
    this.imgObj = imgObj;
  }
  
  lazyLoad(imgObj) {
    const smallWidth = Math.round(imgObj.width / 100);
    const smallHeight = Math.round(imgObj.height / 100);
    const smallImgOptions = `${imgObj.options},w_${smallWidth},h_${smallHeight},e_blur:300`;
    const smallImgURL = getURL(imgObj.fileName, smallImgOptions);
    return smallImgURL;
  }

  onIntersection(entries) {
    // Loop through the entries
    entries.forEach(entry => {
      // Are we in viewport?
      if(entry.intersectionRatio > 0) {
  
        // Stop watching and load the image
        this.observer.unobserve(entry.target);
        this.preloadImage(entry.target);
      }
    });
  }

  preloadImage(target) {
    console.log('target', target);
  }

  render() {
    const dom = template.clone();
    
    // Get all of the images that are marked up to lazy load
    const images = dom.querySelectorAll('.js-lazy-image');

    // If we don't have support for intersection observer, load the images immediately
    if(!('IntersectionObserver' in window)) {
      Array.from(images).forEach(image => this.preloadImage(image));
    } else {
      const config = {
      // If the image gets within 50px in the Y axis, start the download.
        rootMargin: '50px 0px',
        threshold: 0.01
      };

      // The observer for the images on the page
      this.observer = new IntersectionObserver(entries => this.onIntersection(entries), config);
      images.forEach(image => {
        this.observer.observe(image);
      });
    }
    
    return dom;
  }
}