
import React from 'react';
import styled from 'styled-components/native';
import { Button } from '.';

const RowBox = styled.View`
  flex: 1;
  flex-direction: row;
`;

export default ButtonRow = ({keys}) => (
  <RowBox>
    { /* https://stackoverflow.com/a/32157488 */ }
    {keys.map(key => (
      <Button text={key} key={key} />
    ))}
  </RowBox>
);
