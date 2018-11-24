export default class Component {
  constructor(host) {
    this.host = host;
    this._render();
  }

  render() {
    return '';
  }

  _render() {
    this.host.innerHTML = this.render();
  }
}
