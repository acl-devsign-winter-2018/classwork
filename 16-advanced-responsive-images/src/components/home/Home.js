import Template from '../Template';
import html from './home.html';
import './home.css';

import Picture from '../picture/Picture';

const template = new Template(html);

export default class Home {

  render() {
    const dom = template.clone();

    const picture = new Picture({
      // keep aspect ratios and breakpoints in DESCENDING ORDER,
      // and have the same amount of both
      aspectRatios: ['3:1', '5:2', '2:1', '3:2', '1:1'],
      breakpoints: [2000, 1500, 1200, 900, 600],
      /* https://cloudinary.com/documentation/image_transformations 
      crop fill, auto gravity, auto quality are what I used here.
      */
      options: 'c_fill,g_auto,q_auto',
      fileName: 'wheatfield-with-crows-vincent-van-gogh-1890_nb7qd7.jpg',
      alt: 'Vincent Van Gogh, Wheatfield With Crows, 1890'
    });
    const pictureDom = picture.render();

    const blossoms = new Picture({
      aspectRatios: ['16:9', '16:9', '2:1', '2:1'],
      breakpoints: [1750, 1250, 750, 500],
      options: 'c_fill,g_auto,q_auto',
      fileName: 'almond-blossom-vincent-van-gogh-1890_ligjn3.jpg',
      alt: 'Vincent Van Gogh, blossoms, 1888'
    });
    const blossomDom = blossoms.render();

    dom.querySelector('#splash').appendChild(pictureDom);
    dom.querySelector('#blossoms').appendChild(blossomDom);
    return dom;
  }

  unrender() {
    // no-op
  }
}
