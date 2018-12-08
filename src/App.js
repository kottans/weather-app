import Component from "./Component.js";
import Temperature from "./Temperature.js";

export default class App extends Component {
  /**
   * Instantiates App component
   * @param {HTMLElement} host
   */
  constructor(host) {
    super(host);
  }

  render() {
    return [
      {
        tag: 'div',
        innerHTML: 'Weather',
      },
      {
        tag: Temperature,
      },
    ];
  }
}
