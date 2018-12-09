class Component {
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
    content.map(item => {
      let itemType = typeof item;
      let element;
      switch (itemType) {
        case 'string':
          element = document.createElement('div');
          element.innerHTML = item;
          break;
        case 'function':
          element = document.createElement('div');
          new item(element);
          break;
        default:
          element = item;
      }
      return element;
    }).forEach(element => {
      this.host.appendChild(element);
    });
  }
}

class Temperature extends Component {
  constructor(host) {
    super(host);
  }
  render() {
    return '36.6&deg;C';
  }
}

class App extends Component {
  constructor(host) {
    super(host);
  }

  render() {
    const vDOM = [
      'Weather',
      Temperature,
      document.createElement('div'),
      {
        tag: Temperature,
        className: 'flex-row',
      },
    ];
    return vDOM;
  }
}

new App(document.getElementById('root'));

// TODO: id, classList
// TODO: props
// TODO: split into dedicated files (not yet modules)
// TODO: create repo
// TODO: assignment (mock, global styles, JSX optional, modules and moduled styles optional)
