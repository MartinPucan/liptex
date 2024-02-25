import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import {Container} from "../../components/Container/Container";

export const Request = () => {
  return (
    <>
      <Header></Header>
        <Container>
            <h2 style={{ textAlign: 'center', marginBlock: 16 }}>Poptavka</h2>
        </Container>
      <Footer></Footer>
    </>
  );
};
