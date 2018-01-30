import Template from '../Template';
import html from './bio.html';

const template = new Template(html);

export default class Bio {

  render() {
    return template.clone();
  }

  unrender() {
    // no-op
  }
}
