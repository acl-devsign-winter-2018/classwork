import html from './one.html';
import Template from '../../Template';

const template = new Template(html);

export default class One {
  render() {
    return template.clone();
  }
}