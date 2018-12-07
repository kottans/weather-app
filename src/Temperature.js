import Component from "./Component.js";
export default class Temperature extends Component {
  /**
   * Instantiates Temperature component
   * @param {HTMLElement} host
   */
  constructor(host) {
    super(host);
  }

  render() {
    return "37&deg;C";
  }
}
