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
        case 'function':
          // is Component constructor
          element = document.createElement('div');
          new item(element);
          break;
        default:
          console.log(element, Component._getItemType(item));
      }
      element && this.host.appendChild(element);
    });
  }

  static _getItemType(item) {
    if (item instanceof Element || item instanceof HTMLDocument) return 'element';
    return typeof item;
  }
}
