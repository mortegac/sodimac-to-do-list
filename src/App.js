import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import { Container, Row, Col } from 'react-bootstrap'

import ThemeProvider from './ThemeProvider';

import NavBarTop from './components/NavBarTop';


import Home from './view/Home';
import Task from './view/Tasks';
import MyTask from './view/MyTask';
import NotFound from './view/NotFound';

function App() {
  return (
    <Container>
    
      <ThemeProvider> 

        <BrowserRouter>
          <Row>
            <Col>
              <NavBarTop/>
            </Col>
          </Row>
          <Row>
            <Col>
            {/* CONTENIDO */}
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/mis-tareas" component={MyTask} />
                <Route exact path="/tareas" component={Task} />
              
                <Route render={NotFound} />
              </Switch>
            </Col>
          </Row>
        </BrowserRouter>

      </ThemeProvider>

    </Container>
  );
}

export default App;
