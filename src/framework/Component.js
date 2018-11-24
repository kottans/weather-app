import { clearDomChildren, appendDomFragment, buildDomFragment } from "../utils";
import ComponentFactory from "../framework/ComponentFactory";

export default class Component {
  constructor(host, props) {
    this.host = host;
    this.props = props || {};
    this._render();
  }

  render() {
    return '';
  }

  _render() {
    let rendered = this.render();
    if (typeof rendered === 'string') {
      rendered = Component._createDomFragment(rendered);
    }
    if (Array.isArray(rendered) && rendered[0].tag) {
      rendered = buildDomFragment(document.createDocumentFragment(), rendered);
    }
    appendDomFragment(clearDomChildren(this.host), rendered);
  }

  static _createDomFragment(string) {
    const template = document.createElement('template');

    let componentCount = 0;
    let idBase = new Date().getTime();
    let componentMap = {};

    string = string.trim().replace(/<([A-Z][a-zA-Z]*)(.*)\/>/g, (match, p1, p2, offset) => {
      const id = 'z' + idBase + (componentCount++);

      // extract props
      let props = {};
      let parsingResults;
      p2 = p2.trim();
      if (p2.length) {
        const paramsRegex = /(\S+)=['"]?((?:(?!\/>|>|"|'|\s).)+)/g;
        while ((parsingResults = paramsRegex.exec(p2)) !== null) {
          props[parsingResults[1]] = parsingResults[2];
        }
      }

      componentMap[id] = {
        name: p1,
        props: props,
      };
      return `<div id="${id}"></div>`;
    });
    template.innerHTML = string;

    Object.keys(componentMap).forEach(id => {
      let host = template.content.querySelector('#' + id);
      const cls = ComponentFactory.get(componentMap[id].name);
      new cls(host, componentMap[id].props);
    });

    return template.content;
  }
}
