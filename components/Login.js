
import React from 'react';
import styled from 'styled-components/native';

/* https://kylewbanks.com/blog/react-native-tutorial-part-2-designing-a-calculator */

/* https://github.com/styled-components/styled-components/issues/149 */
const ButtonBox = styled.TouchableHighlight.attrs({
  underlayColor: '#193441',
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgb(49, 51, 53);
  border-radius: 0px;
  margin: 0px;
`;

const ButtonText = styled.Text`
  font-size: 20;
  font-family: Orbitron-Bold;
  color: ${props => (props.text === 'Go' || props.text === 'Back' ? 'green' : 'orange')};
`;

export default ({ func, text }) => (
  <ButtonBox onPress={() => func(text)}>
    <ButtonText text={text}>{text}</ButtonText>
  </ButtonBox>
);
