/**
 * Prime Components app
 * https://github.com/kewp/prime-components
 */

import React from 'react';
import { Container, Header, Input, Keypad, ButtonRow } from './components';

const App = () => (
  <Container>
    <Header>Prime Components</Header>
    <Input>123456</Input>
    <Keypad>
      <ButtonRow keys={['1','2','3']} />
      <ButtonRow keys={['4','5','6']} />
      <ButtonRow keys={['7','8','9']} />
      <ButtonRow keys={['0','Clear','Go']} />
    </Keypad>
  </Container>
);

export default App;
