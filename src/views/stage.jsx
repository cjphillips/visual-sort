import React, { Component, PureComponent } from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export class Node extends PureComponent {
  render() {
    return (
      <Container fluid={true} className='mx-0 px-0'>
        <div
          className={`node ${this.props.active ? 'active' : 'inactive'}`}
          style={{
            width: `${1000 / this.props.widthModifier}px`,
          }}
        >
          {this.props.showValue && (
            <Row className='justify-content-md-center'>
              <p className='node-value'>{this.props.value}</p>
            </Row>
          )}
          <div
            className='node-bar'
            style={{
              height: `${10 * this.props.value - 5}px`,
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
    console.log('In Stage contructor', this.props);
  }

  render() {
    let showValues = this.props.elements.length < 30;
    let widthModifier = this.props.elements.length;
    return (
      <Container className='mt-5' fluid={true}>
        <Row className='justify-content-md-center'>
          {this.props.elements.map(e => (
            <Col className='px-0 mx-0' xs={true}>
              <Node
                key={e.value.toString()}
                value={e.value}
                showValue={showValues}
                widthModifier={widthModifier}
                active={e.active}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
