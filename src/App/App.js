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
            props: {t: -10},
          },
          {
            tag: 'div',
            classList: 'flex-row',
            children: [
              {
                tag: Temperature,
                props: {t: -9},
              },
              {
                tag: Temperature,
                props: {t: -8},
              },
              {
                tag: Temperature,
                props: {t: -8},
              },
              {
                tag: Temperature,
                props: {t: -5},
              },
              {
                tag: Temperature,
                props: {t: -32},
              },
            ],
          }
        ],
      },
    ];
  }
}
