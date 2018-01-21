import html from './two.html';
import Template from '../../Template';

const template = new Template(html);

export default class Two {
  render() {
    return template.clone();
  }
}