import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Node extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "blue",
          width: "10px",
          height: `${10 * this.state.value}px`
        }}
      />
    );
  }
}

export class Stage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      range: props.range
    };
  }

  render() {
    const elements = [];

    for (let i = 0; i < this.state.range; i++) {
      elements.push(<Node value={i} />);
    }

    return (
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          {elements.map(e => (
            <Col xs={1}>{e}</Col>
          ))}
        </Row>
      </Container>
    );
  }
}
