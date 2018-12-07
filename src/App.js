import Temperature from "./Temperature.js";

export default class App {
  /**
   * Instantiates App component
   * @param {HTMLElement} host
   */
  constructor(host) {
    // Since component requires host as an HTMLElement we need to change rendering approach
    // 1. Create text block
    // 1a. Create container for text
    const titleContainer = document.createElement('div');
    // 1b. Assign text
    titleContainer.innerHTML = 'Weather';
    // 2. Create temperature block
    // 2a. Create container for Temperature component
    const temperatureContainer = document.createElement('div');
    // 2b. Instantiate Temperature component to render into container
    new Temperature(temperatureContainer);
    // 3. Attach containers to the App's host
    [titleContainer, temperatureContainer].forEach(element => host.appendChild(element));
  }
}
