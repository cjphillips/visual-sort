import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Algorithms, SortOrder } from 'sorting/definitions';
import Container from 'react-bootstrap/Container';
import quicksort from 'sorting/algorithms/quicksort';

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = { activeAlgorithm: null };
  }

  handleSelection = alg => {
    this.setState({
      activeAlgorithm: alg,
    });
  };

  render() {
    return (
      <Navbar bg='dark' variant='dark'>
        <Nav variant='pills' className='mr-auto'>
          <NavDropdown
            title='Sort Order'
            id='algorithms-dropdown'
            onSelect={this.props.onListOrderChange}
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
          >
            {Object.values(Algorithms).map((a, i) => (
              <NavDropdown.Item key={`alg-dd-${i.toString()}`} eventKey={a}>
                {a}
              </NavDropdown.Item>
            ))}
          </NavDropdown>
          {true && (
            <Button
              className='ml-1'
              variant='info'
              onClick={this.props.onStart}
            >
              Run {this.props.selectedAlgorithm}!
            </Button>
          )}
        </Nav>
        <Nav className='justify-content-end' variant='pills'>
          <Container>
            <Nav.Item>
              <div>
                <input
                  type='range'
                  className='custom-range'
                  min='3'
                  max='100'
                  onChange={this.props.onRangeChange}
                />
              </div>
            </Nav.Item>
          </Container>
        </Nav>
      </Navbar>
    );
  }
}

export default Options;
