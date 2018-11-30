/**
 * Prime Components app
 * https://github.com/kewp/prime-components
 */

import React from 'react';
import {
  Container, Header, Input, Keypad, ButtonRow
} from './components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 123456 };

    // This binding is necessary to make `this` work in the callback
    this.press = this.press.bind(this);
  }

  press = (value) => {
    let { number } = this.state;
    if (value === 'Clear') {
      number = Math.floor(number / 10);
      this.setState({ number });
    } else if (value != 'Go' && number<1000000) {
      number += value;
      this.setState({ number });
    }
  };

  render() {
    const { number } = this.state;
    return (
      <Container>
        <Header>Prime Components</Header>
        <Input>{number}</Input>
        <Keypad>
          <ButtonRow func={this.press} keys={['1', '2', '3']} />
          <ButtonRow func={this.press} keys={['4', '5', '6']} />
          <ButtonRow func={this.press} keys={['7', '8', '9']} />
          <ButtonRow func={this.press} keys={['0', 'Clear', 'Go']} />
        </Keypad>
      </Container>
    );
  }
}

export default App;
