import {createDomFragment, clearDomChildren, appendDomFragment, buildDomFragment} from "../utils";

export default class Component {
  constructor(host) {
    this.host = host;
    this._render();
  }

  render() {
    return '';
  }

  _render() {
    let rendered = this.render();
    if (typeof rendered === 'string') {
      rendered = createDomFragment(rendered);
    }
    if (Array.isArray(rendered) && rendered[0].tag) {
      rendered = buildDomFragment(document.createDocumentFragment(), rendered);
    }
    appendDomFragment(clearDomChildren(this.host), rendered);
  }
}
