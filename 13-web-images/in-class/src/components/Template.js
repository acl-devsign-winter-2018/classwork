export default class Template {
  constructor(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    this.fragment = template.content;
  }
      
  clone() {
    return this.fragment.cloneNode(true);
  }
}