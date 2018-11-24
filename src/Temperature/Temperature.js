import {Component} from "../framework";

export default class Temperature extends Component {
  constructor(host) {
    super(host);
  }

  render() {
    return '10&deg;C';
  }
}
