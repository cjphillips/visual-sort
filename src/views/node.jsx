import React, { Component, PureComponent } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Col from 'react-bootstrap/Col';

class NodeValue extends PureComponent {
  render() {
    return (
      <p className={`node-value ${this.props.nodeState}`}>{this.props.value}</p>
    );
  }
}

class NodeBar extends PureComponent {
  render() {
    return (
      <div
        {...this.props}
        className={`node-bar ${this.props.nodeState}`}
        style={{
          height: `${10 * this.props.value - 5}px`,
          backgroundColor: this.props.color,
        }}
      />
    );
  }
}

export class Node extends Component {
  render() {
    return (
      <Container fluid={true} className='mx-0 px-0'>
        <div
          className={`node ${this.props.nodeState}`}
          style={{
            width: `${1000 / this.props.widthModifier}px`,
          }}
        >
          {this.props.showValues ? (
            <Col className='mx-0 px-0' align='center'>
              <NodeValue
                value={this.props.value}
                nodeState={this.props.nodeState}
              />
              <NodeBar
                value={this.props.value}
                nodeState={this.props.nodeState}
              />
            </Col>
          ) : (
            <OverlayTrigger
              placement='top'
              overlay={<Tooltip>{this.props.value}</Tooltip>}
              delay={{ show: 3, hide: 5 }}
            >
              <NodeBar
                value={this.props.value}
                nodeState={this.props.nodeState}
              />
            </OverlayTrigger>
          )}
        </div>
      </Container>
    );
    /*
    return (
      <Container fluid={true} className='mx-0 px-0'>
        <div
          className={`node ${this.props.active ? 'active' : 'inactive'}`}
          style={{
            width: `${1000 / this.props.widthModifier}px`,
            backgroundColor: this.props.color,
          }}
        >
          {this.props.showValue ? (
            <>
            <Row className='justify-content-md-center'>
              <p className='node-value'>{this.props.value}</p>
            </Row>
            <div
            className='node-bar'
            style={{
              height: `${10 * this.props.value - 5}px`,
            }}
            />
          ) : (
            <OverlayTrigger>
            <div
            className='node-bar'
            style={{
              height: `${10 * this.props.value - 5}px`,
            }}
          ></div>
            </OverlayTrigger>
          )}
      </div>
      </Container>
    );
    */
  }
}

export default Node;
