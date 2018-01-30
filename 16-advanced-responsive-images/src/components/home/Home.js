import Template from '../Template';
import html from './home.html';
import './home.css';

import Picture from '../picture/Picture';

const template = new Template(html);

export default class Home {

  render() {
    const dom = template.clone();

    const picture = new Picture({
      aspectRatios: ['3:1', '5:2', '2:1', '3:2', '1:1'],
      breakpoints: [2000, 1500, 1200, 900, 600],
      options: 'c_fill,g_auto,q_auto',
      fileName: 'wheatfield-with-crows-vincent-van-gogh-1890_nb7qd7.jpg',
      alt: 'Vincent Van Gogh, Wheatfield With Crows, 1890'
    });
    const pictureDom = picture.render();

    dom.querySelector('#splash').appendChild(pictureDom);
    return dom;
  }

  unrender() {
    // no-op
  }
}
