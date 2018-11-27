/**
 * Prime Components app
 * https://github.com/kewp/prime-components
 */

import React from 'react';
import { Container, Input, Keypad, Button, ButtonRow } from './components';

const App = () => (
  <Container>
    <Input>123456</Input>
    <Keypad>
      <ButtonRow>
        <Button text="1" /> 
    	<Button text="2" />
    	<Button text="3" /> 
      </ButtonRow>
      <ButtonRow>
        <Button text="4" />
        <Button text="5" />
        <Button text="6" />
      </ButtonRow>
      <ButtonRow>
        <Button text="7" />
        <Button text="8" />
        <Button text="9" />
      </ButtonRow>
      <ButtonRow>
        <Button text="0" />
        <Button text="Clear" />
        <Button text="Go" />
      </ButtonRow>
    </Keypad>
  </Container>
);

export default App;
