export default class Component {
  constructor(host) {
    this.host = host;
    this._render();
  }

  render() {
    return '';
  }

  _render() {
    const content = this.render();
    if (typeof content === 'string') {
      this.host.innerHTML = content;
    } else if (Array.isArray(content)) {
      // expect content to be an array of HTMLElements
      content.forEach(element => this.host.appendChild(element));
    } else {
      // expect content to be an HTMLElement
      this.host.appendChild(content);
    }
  }
}
