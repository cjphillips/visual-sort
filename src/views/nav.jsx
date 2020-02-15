import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { ALGORITHMS, SORT_ORDER } from 'sorting/algorithm';
import Container from 'react-bootstrap/Container';
import quicksort from 'sorting/algorithms/quicksort';

class Navigation extends Component {
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
        <Nav
          variant='pills'
          className='mr-auto'
          onSelect={this.handleSelection}
        >
          <NavDropdown
            title={Object.values(SORT_ORDER)[0]}
            id='algorithms-dropdown'
            defaultValue={Object.keys(SORT_ORDER)[0]}
          >
            {Object.values(SORT_ORDER).map(a => (
              <NavDropdown.Item eventKey={a}>{a}</NavDropdown.Item>
            ))}
          </NavDropdown>
          <NavDropdown
            title={Object.values(ALGORITHMS)[0]}
            id='algorithms-dropdown'
            defaultValue={Object.keys(ALGORITHMS)[0]}
          >
            {Object.values(ALGORITHMS).map(a => (
              <NavDropdown.Item eventKey={a}>{a}</NavDropdown.Item>
            ))}
          </NavDropdown>
          {true && (
            <Button
              className='ml-1'
              variant='info'
              onClick={() => {
                console.log(quicksort());
              }}
            >
              Run {this.state.activeAlgorithm}!
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
                  onChange={e => {
                    this.props.onRangeChange(e);
                  }}
                />
              </div>
            </Nav.Item>
          </Container>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
