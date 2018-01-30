import Template from '../Template';
import html from './bio.html';

import LazyImg from '../lazyImg/LazyImg';

const template = new Template(html);

export default class Bio {

  render() {
    const dom = template.clone();

    // const selfPortrait = new LazyImg({
    //   width: 3142,
    //   height: 3820,
    //   options: 'q_auto',
    //   fileName: 'self-portrait-vincent-van-gogh-1889_d1qhzg.jpg',
    //   alt: 'Vincent Van Gogh, Self Portrait, 1889;'
    // });
    // const selfPortraitDom = selfPortrait.render();

    // dom.querySelector('#figure0').appendChild(selfPortraitDom);
    const lazyImg = new LazyImg();

    lazyImg.render();
    
    return dom;
  }

  unrender() {
    // no-op
  }
}
