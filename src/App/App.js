import { Component } from "../framework";
import ComponentFactory from "../framework/ComponentFactory";
import { Temperature } from "../Temperature";
import { Counter } from "../Counter";
import { bindScope } from "../utils";

export default class App extends Component {
  constructor(host) {
    super(host);
    bindScope(this, 'updateCount');
    this.updateState({
      count: 5,
    });
  }

  render() {
    return `<div class="flex-column">
              <div>
                Weather ${this.state.count}
                <Counter count=${this.state.count} changeHandler={this.updateCount} />
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

  updateCount(newValue) {
    this.updateState({
      count: newValue,
    });
  }
}
ComponentFactory.register(App);
