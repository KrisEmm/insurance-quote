import styled from '@emotion/styled';
import React, { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { Report } from './components/Report';
import { Result } from './components/Result';
import { Spin } from './components/Spin';


const Container = styled.div`
  max-width:600px;
  margin: 0 auto;
`
const ContainerForm = styled.div`
  background-color: #FFFFFF;
  padding:3rem;
`
function App() {
  const [isReady, setIsReady] = useState(false)
  const [report, setReport] = useState({
    quotation: 0,
    info: {
      marca: '',
      year: '',
      plan: ''
    }
  })
  const { info, quotation } = report
  return (
    <Container>
      <Header title="Cotizador de Seguros" />
      <ContainerForm>
        <Form setReport={setReport} setIsReady={setIsReady} />
        {isReady
          ? <Spin />
          : <Report info={info} />
        }
        {isReady
          ? null
          : <Result quotation={quotation} />
        }
      </ContainerForm>
    </Container>
  );
}

export default App;
