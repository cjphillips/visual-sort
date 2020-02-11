import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Navigation from "./models/nav";
import { Stage } from "./models/stage";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Container fluid="true">
        <Navigation />
        <Stage range="30" />
      </Container>
    );
  }
}

export default App;
