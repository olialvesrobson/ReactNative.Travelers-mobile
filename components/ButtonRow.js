
import React from 'react';
import styled from 'styled-components/native';
import { Button } from '.';

const RowBox = styled.View`
  flex: 1;
  flex-direction: row;
`;

export default ({ func, keys }) => (
  <RowBox>
    { /* https://stackoverflow.com/a/32157488 */ }
    {keys.map(key => (
      <Button func={func} text={key} key={key} />
    ))}
  </RowBox>
);
