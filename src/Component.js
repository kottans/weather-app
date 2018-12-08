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
    // expect content to be an array of HTMLElements, strings, Components, and structured objects
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
        case 'object':
          // is an object defining HTMLElement or Component
          if (typeof item.tag === 'string') {
            element = document.createElement(item.tag);
          } else {
            element = document.createElement('div');
            new item.tag(element);
          }
          if (item.innerHTML) element.innerHTML = item.innerHTML;
          break;
        default:
          console.error('Unknown item type', Component._getItemType(item), 'for', item, 'in (see trace below)');
          console.trace();
      }
      element && this.host.appendChild(element);
    });
  }

  static _getItemType(item) {
    if (item instanceof Element || item instanceof HTMLDocument) return 'element';
    return typeof item;
  }
}
