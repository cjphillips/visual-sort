import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Algorithms, SortOrder } from 'sorting/definitions';
import Container from 'react-bootstrap/Container';
import quicksort from 'sorting/algorithms/quicksort';

class Options extends Component {
  render() {
    return (
      <Navbar bg='dark' variant='dark'>
        <Nav variant='pills' className='mr-auto'>
          <NavDropdown
            title='Sort Order'
            id='algorithms-dropdown'
            onSelect={this.props.onListOrderChange}
            disabled={this.props.isSorting}
          >
            {Object.values(SortOrder).map((a, i) => (
              <NavDropdown.Item key={`sort-dd-${i.toString()}`} eventKey={a}>
                {a}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <NavDropdown
            title='Algorithm'
            id='algorithms-dropdown'
            onSelect={this.props.onAlgorithmChange}
            disabled={this.props.isSorting}
          >
            {Object.values(Algorithms).map((a, i) => (
              <NavDropdown.Item key={`alg-dd-${i.toString()}`} eventKey={a}>
                {a}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          <Button
            className='ml-1'
            variant='info'
            onClick={this.props.onStart}
            disabled={this.props.isSorting}
          >
            Run {this.props.selectedAlgorithm}!
          </Button>
        </Nav>
        <Nav className='justify-content-end' variant='pills'>
          <Container>
            <Navbar>
              <Form inline>
                <input
                  disabled={this.props.isSorting}
                  type='range'
                  className='custom-range'
                  min='3'
                  max='100'
                  value={this.props.selectedRange}
                  onChange={this.props.onRangeChange}
                />
              </Form>
            </Navbar>
            <Navbar className='pr-0'>
              <Navbar.Brand>{this.props.selectedRange}</Navbar.Brand>
            </Navbar>
          </Container>
        </Nav>
      </Navbar>
    );
  }
}

export default Options;
