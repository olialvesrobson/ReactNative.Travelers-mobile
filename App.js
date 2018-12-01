/**
 * Prime Components app
 * https://github.com/kewp/prime-components
 */

import React, { Component } from 'react';
import {
  Container, Header, Input, Processing, Keypad, ButtonRow
} from './components';

type State = {
  number: number;
  nums: Array;
  running: boolean;
};

class App extends Component<{}, State> {
  state = {
    number: 123456,
    factors: [],
    processing: false,
    running: false
  };

  getPrimes = (N) => {
    const factors = [];
    let num = N;
    while (num % 2 === 0) {
      factors.push({ key: '2' });
      num /= 2;
    }
    let i;
    for (i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
      while (num % i === 0) {
        factors.push({ key: `${i}` });
        num /= i;
      }
    }
    if (num > 1) { factors.push({ key: `${num}` }); }
    this.setState({ running: false });
    this.setState({ factors });
  };

  press = (value) => {
    let { number } = this.state;
    if (value === 'Clear') {
      number = Math.floor(number / 10);
      this.setState({ number });
    } else if (value !== 'Go' && value !== 'Back' && number < 1000000) {
      if (number === 0) number = value; else number += value;
      this.setState({ number });
    } else if (value === 'Go') {
      this.setState({ processing: true });
      this.getPrimes(number);
    } else if (value === 'Back') {
      this.setState({ processing: false });
    }
  };

  render() {
    const { state } = this;
    return (
      <Container>
        <Header>Prime Components</Header>
        <Input>{state.number}</Input>
        {state.processing ? (
          <Processing running={state.running} factors={state.factors} press={this.press} />
        ) : (
          <Keypad>
            <ButtonRow func={this.press} keys={['1', '2', '3']} />
            <ButtonRow func={this.press} keys={['4', '5', '6']} />
            <ButtonRow func={this.press} keys={['7', '8', '9']} />
            <ButtonRow func={this.press} keys={['0', 'Clear', 'Go']} />
          </Keypad>
        )}
      </Container>
    );
  }
}

export default App;
