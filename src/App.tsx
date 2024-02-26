import { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Experience from './component/Experience';
import Contact from './component/Contact';
import Education from './component/Education';
import Skills from './component/Skills';
import DisplayResume from './component/DisplayResume';

type ContextData = {
  name: string;
  setName: (newValue: string) => void;
}

export const AppContext = createContext({} as ContextData);

function App() {

  const [name, setName] = useState('');

  const contextData = {
    name: name,
    setName: setName
  };

  return (
    
  <AppContext.Provider value={contextData}>

    <Container>
    <Row>
        <Navbar expand='lg' className="bg-body-tertiary">
        <Navbar.Brand>Resume Builder</Navbar.Brand>
        </Navbar>
    </Row>
    <Row>
      <br/>
    </Row>
    <Row>
        <Col sm={4}>
          <Contact />
          <Experience />
          <Education />
          <Skills />
        </Col>
        <Col>
          <DisplayResume />
        </Col>
    </Row>
  </Container>
</AppContext.Provider>
  );
}

export default App;
