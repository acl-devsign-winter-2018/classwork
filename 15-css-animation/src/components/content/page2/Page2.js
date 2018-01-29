import Template from '../../Template';
import html from './page2.html';
import '../content.css';

const template = new Template(html);

export default class Page2 {

  render() {
    return template.clone();
  }

  unrender() {
    // no-op
  }
}
