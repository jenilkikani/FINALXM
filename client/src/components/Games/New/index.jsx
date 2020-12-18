import React from 'react';
import Header from '../../shared/Header';
import { Container } from 'react-bootstrap';
import Form from '../Form';
const New = () => {
  return (
    <>
      <Header title="Games">
        Hi I'm a man-child.
      </Header>

      <Container>
      <Form endpoint="games"/>
      </Container>
    </>
  );
}
 
export default New;