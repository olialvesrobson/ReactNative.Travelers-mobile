/**
 * Prime Components app
 * https://github.com/kewp/prime-components
 */

import React from 'react';
import { Container, Header, Input, Keypad, ButtonRow } from './components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number:123456};
  }
  render() {
    return (
      <Container>
        <Header>Prime Components</Header>
        <Input>{this.state.number}</Input>
        <Keypad>
          <ButtonRow keys={['1','2','3']} />
          <ButtonRow keys={['4','5','6']} />
          <ButtonRow keys={['7','8','9']} />
          <ButtonRow keys={['0','Clear','Go']} />
        </Keypad>
      </Container>
    );
  }
}

export default App;
