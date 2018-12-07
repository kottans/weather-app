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
    } else {
      this.host.appendChild(content);
    }
  }
}
