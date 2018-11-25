import { Component } from "../framework";
import ComponentFactory from "../framework/ComponentFactory";
import {bindScope} from "../utils";

export default class Counter extends Component {
  constructor(host, props) {
    super(host, props);
    this.updateState({
      count: this.props.count,
    });
    bindScope(this, 'decrement', 'increment');
  }

  render() {
    return `<input type="button" value="-" on-Click={this.decrement} />
        ${this.state.count}
        <input type="button" value="+" on-Click={this.increment} />`;
  }

  decrement() {
    this.props.changeHandler(+this.state.count - 1);
  }

  increment() {
    this.props.changeHandler(+this.state.count + 1);
  }
}
ComponentFactory.register(Counter);
