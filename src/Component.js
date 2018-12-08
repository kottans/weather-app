export default class Component {
  constructor(host) {
    this.host = host;
    this._render();
  }

  render() {
    return '';
  }

  _render() {
    let content = this.render();
    if (typeof content === 'string') {
      this.host.innerHTML = content;
      return;
    }
    if (!Array.isArray(content)) {
      content = [ content ];
    }
    // expect content to be an array of HTMLElements
    content.forEach(item => {
      let element = null;
      switch(Component._getItemType(item)) {
        case 'string':
          element = document.createElement('div');
          element.innerHTML = item;
          break;
        case 'element':
          element = item;
          break;
      }
      element && this.host.appendChild(element);
    });
  }

  static _getItemType(item) {
    if (typeof item === 'string') return 'string';
    if (item instanceof Element || item instanceof HTMLDocument) return 'element';
  }
}
