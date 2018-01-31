import Template from '../Template';
import html from './home.html';
import './home.css';

import Picture from '../picture/Picture';
import Lazyload from '../lazyload/Lazyload';

const template = new Template(html);

export default class Home {

  render() {
    const dom = template.clone();

    const picture = new Picture({
      // keep aspect ratios and breakpoints in DESCENDING ORDER,
      // and have the same amount of both
      aspectRatios: ['3:1', '5:2', '2:1', '3:2', '1:1'],
      breakpoints: [2000, 1500, 1200, 900, 600],
      // https://cloudinary.com/documentation/image_transformations 
      // crop fill, auto gravity, auto quality are what I used here.
      options: 'c_fill,g_auto,q_auto',
      fileName: 'wheatfield-with-crows-vincent-van-gogh-1890_nb7qd7.jpg',
      alt: 'Vincent Van Gogh, Wheatfield With Crows, 1890'
    });
    const pictureDom = picture.render();

    dom.querySelector('#splash').appendChild(pictureDom);
    
    const imgArray = [
      {
        fileName: 'self-portrait-vincent-van-gogh-1889_d1qhzg',
        alt: 'Vincent Van Gogh, Self Portrait, 1889',
        caption: 'Vincent Van Gogh, <em>Self Portrait</em>, 1889',
        width: 3142,
        height: 3840,
        options: 'q_auto',
      },
      {
        fileName: 'the-potato-eaters-vincent-van-gogh-1885_jksuse',
        alt: 'Vincent Van Gogh, The Potato Eaters, 1885',
        caption: 'Vincent Van Gogh, <em>The Potato Eaters</em>, 1885',
        width: 5000,
        height: 3814,
        options: 'q_auto',
      },
      {
        fileName: 'le-cafe-de-nuit-vincent-van-gogh-1888_rplqns',
        alt: 'Vincent Van Gogh, Le Cafe De Nuit, 1888',
        caption: 'Vincent Van Gogh, <em>Le Cafe De Nuit</em>, 1888',
        width: 3000,
        height: 2368,
        options: 'q_auto',
      },
      {
        fileName: 'sunflowers-vincent-van-gogh-1889_k9fsiu',
        alt: 'Vincent Van Gogh, Sunflowers, 1889',
        caption: 'Vincent Van Gogh, <em>Sunflowers</em>, 1889',
        width: 3224,
        height: 4226,
        options: 'q_auto',
      },
      {
        fileName: 'almond-blossom-vincent-van-gogh-1890_ligjn3',
        alt: 'Vincent Van Gogh, Almond Blossom, 1890',
        caption: 'Vincent Van Gogh, <em>Almond Blossom</em>, 1890',
        width: 3139,
        height: 2480,
        options: 'q_auto',
      }
    ];
    
    const figures = dom.querySelectorAll('figure');
    for(let i = 0; i < figures.length; i++) {
      const lazy = new Lazyload(imgArray[i]);
      const lazyDom = lazy.render();
      figures[i].appendChild(lazyDom);
    }
    
    return dom;
  }

  unrender() {
    // no-op
  }
}
