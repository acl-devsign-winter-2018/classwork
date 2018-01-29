import Template from '../../Template';
import html from './page1.html';
import '../content.css';

const template = new Template(html);

export default class Page1 {

  render() {
    return template.clone();
  }

  unrender() {
    // no-op
  }
}
