export default class Template {
  constructor(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    this.template = template.content;
  }

  render() {
    return this.template.cloneNode(true);
  }
}
