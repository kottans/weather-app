import { Component } from "../framework";
import ComponentFactory from "../framework/ComponentFactory";

export default class Temperature extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render() {
    return this.props.t + '&deg;' + this.props.unit;
  }
}
ComponentFactory.register(Temperature);
