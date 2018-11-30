
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
  border-width: 0.5;
  border-color: white;
`;

const ButtonText = styled.Text`
  font-size: 30;
  font-family: Orbitron-Bold;
  color: orange;
`;

handleButtonPress = (value) => {
  
};

export default Button = ({text}) => (
  <ButtonBox onPress={() => handleButtonPress()}>
    <ButtonText>{text}</ButtonText>
  </ButtonBox>
);
