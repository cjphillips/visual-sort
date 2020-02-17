import React, { PureComponent } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export class Node extends PureComponent {
  render() {
    return (
      <Container fluid={true} className='mx-0 px-0'>
        <div
          className={`node ${this.props.active ? 'active' : 'inactive'}`}
          style={{
            width: `${1000 / this.props.widthModifier}px`,
            backgroundColor: this.props.color,
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

export default Node;
