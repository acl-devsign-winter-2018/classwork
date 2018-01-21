import html from './three.html';
import Template from '../../Template';

const template = new Template(html);

export default class Three {
  render() {
    return template.clone();
  }
}