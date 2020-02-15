import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const MAX_ELEMENT_VALUE = 100;
const MIN_ELEMENT_VALUE = 1;

const getRandomInt = (min, max) => {
  /*
  Get a random integer between min (inclusive) and max (exclusive).
  */
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

class Node extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      widthModifier: props.widthModifier,
      active: false,
    };
  }

  #foo = () => {};

  render() {
    return (
      <Container fluid={true} className='mx-0 px-0'>
        <div
          className={`node ${this.state.value < 50 ? 'active' : 'inactive'}`}
          style={{
            width: `${1000 / this.state.widthModifier}px`,
          }}
        >
          {this.props.showValue && (
            <Row className='justify-content-md-center'>
              <p className='node-value'>{this.state.value}</p>
            </Row>
          )}
          <div
            className='node-bar'
            style={{
              height: `${10 * this.state.value - 5}px`,
            }}
          />
        </div>
      </Container>
    );
  }
}

export class Stage extends Component {
  constructor(props) {
    super(props);

    console.log(props.range);

    this.state = {
      range: props.range,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.range !== this.props.range) {
      console.log(prevProps.range);
      this.setState({ range: this.props.range });
    }
  }

  render() {
    let elements = [];
    for (let i = 0; i < this.state.range; ++i) {
      let elementValue = getRandomInt(MIN_ELEMENT_VALUE, MAX_ELEMENT_VALUE);
      elements.push(
        <Node
          value={elementValue}
          widthModifier={this.state.range}
          showValue={this.state.range <= 30}
        />,
      );
    }

    return (
      <Container className='mt-5' fluid={true}>
        <Row className='justify-content-md-center'>
          {elements.map(e => (
            <Col className='px-0 mx-0' xs={true}>
              {e}
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
