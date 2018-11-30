
import React from 'react';
import styled from 'styled-components/native';

const ContainerBox = styled.View`
  flex: 1;
`;

export default class Container extends React.Component {
  render() {
    return (
      <ContainerBox>
      	{this.props.children}
      </ContainerBox>
    );
  }
}
