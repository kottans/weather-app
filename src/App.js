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
    const titleContainer = document.createElement('div');
    titleContainer.innerHTML = 'Weather';

    const temperatureContainer = document.createElement('div');
    new Temperature(temperatureContainer);

    const vDOM = [
      document.createElement('div'),
      titleContainer,
      'Weather',
      temperatureContainer,
    ];


    // TODO: remove unnecessary elements
    return vDOM;
  }
}
