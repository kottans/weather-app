import {Component} from "../framework";

export default class Temperature extends Component {
  constructor(host, props) {
    super(host, props);
  }

  render() {
    return this.props.t + '&deg;C';
  }
}
