import { clearDomChildren } from "./utils";

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
    Component._appendChildren(clearDomChildren(this.host), content);
  }

  static _appendChildren(host, children) {
    children.forEach(child => {
      let element = null;
      let elementType = Component._getItemType(child);
      switch(elementType) {
        case 'string':
          child = {
            tag: 'div',
            innerHTML: child,
          };
          elementType = 'object';
          break;
        case 'element':
          element = child;
          break;
        case 'function':
          // is Component constructor
          child = {
            tag: child,
          };
          elementType = 'object';
          break;
        case 'object':
          break;
        default:
          console.error('Unknown item type', Component._getItemType(child), 'for', child, 'in (see trace below)');
          console.trace();
      }
      if (elementType === 'object') {
        // is an object defining HTMLElement or Component
        if (typeof child.tag === 'string') {
          element = document.createElement(child.tag);
        } else {
          element = document.createElement('div');
          // TODO: parse and feed props
          new child.tag(element);
        }
        if (child.innerHTML) element.innerHTML = child.innerHTML;
        if (child.id) element.id = child.id;
        if (child.classList) element.classList.add(typeof child.classList === 'string' ? child.classList.split(' ') : child.classList );
        if (child.children) Component._appendChildren(element, child.children);
      }
      element && host.appendChild(element);
    });
  }

  static _getItemType(item) {
    if (item instanceof Element || item instanceof HTMLDocument) return 'element';
    return typeof item;
  }
}
