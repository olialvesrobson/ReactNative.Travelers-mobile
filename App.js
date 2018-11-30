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
  processing: boolean;
};

class App extends Component<{}, State> {
  state = {
    number: 123456,
    processing: false
  };

  press = (value) => {
    let { number } = this.state;
    if (value === 'Clear') {
      number = Math.floor(number / 10);
      this.setState({ number });
    } else if (value !== 'Go' && number < 1000000) {
      number += value;
      this.setState({ number });
    } else if (value === 'Go') {
      this.setState({ processing: true });
    }
  };

  render() {
    const { state } = this;
    return (
      <Container>
        <Header>Prime Components</Header>
        <Input>{state.number}</Input>
        {state.processing ? (
          <Processing />
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
