import {Component} from "../framework";
import {Temperature} from "../Temperature";

export default class App extends Component {
  constructor(host) {
    super(host);
  }

  render() {
    return [
      {
        tag: 'div',
        classList: 'flex-column',
        children: [
          {
            tag: 'div',
            innerHTML: 'Weather',
          },
          {
            tag: Temperature,
          },
          {
            tag: 'div',
            classList: 'flex-row',
            children: [
              {
                tag: Temperature,
              },
              {
                tag: Temperature,
              },
              {
                tag: Temperature,
              },
              {
                tag: Temperature,
              },
              {
                tag: Temperature,
              },
            ],
          }
        ],
      },
    ];
  }
}
