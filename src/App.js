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
    const childrenContainer = document.createElement('div');

    const titleContainer = document.createElement('div');
    titleContainer.innerHTML = 'Weather';
    const temperatureContainer = document.createElement('div');
    new Temperature(temperatureContainer);
    [titleContainer, temperatureContainer].forEach(element => childrenContainer.appendChild(element));

    // TODO: Get rid of excessive container
    return childrenContainer;
  }
}
