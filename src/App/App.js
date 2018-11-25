import { Component } from "../framework";
import ComponentFactory from "../framework/ComponentFactory";
import { Temperature } from "../Temperature";
import { Counter } from "../Counter";

export default class App extends Component {
  constructor(host) {
    super(host);
  }

  render() {
    return `<div class="flex-column">
              <div>
                Weather
                <Counter count=5 />
              </div>
              <Temperature t=-10 unit="C" />
              <div class="flex-row">
                  <Temperature t=-9 unit="C"/>
                  <Temperature t=-8 unit="C" />
                  <Temperature t=-8 unit="C" />
                  <Temperature t=-5 unit="C" />
                  <Temperature t=-32 unit="C" />
              </div>
           </div>`;
  }
}
ComponentFactory.register(App);
