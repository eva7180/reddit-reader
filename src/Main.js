import React from 'react';
import { Container } from 'react-bootstrap';
import { Article } from './Article';

export class Main extends React.Component {

  render() {
    return (
      <Container>
        <Article />
      </Container>
    )
  }
}