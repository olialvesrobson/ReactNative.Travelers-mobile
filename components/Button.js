
import React from 'react';
import styled from 'styled-components/native';

const ButtonBox = styled.TouchableOpacity.attrs({ activeOpacity: 0.8 })`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-width: 1.0;
  border-color: #91AA9D;
`;

const ButtonText = styled.Text`
  font-size: 22;
  font-weight: bold;
  color: white;
`;

export default Button = ({text}) => (
  <ButtonBox>
    <ButtonText>{text}</ButtonText>
  </ButtonBox>
);
