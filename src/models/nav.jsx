import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { ALGORITHMS, SORT_ORDER } from './algorithm';
import Container from 'react-bootstrap/Container';

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
            title='Select a sort order'
            id='algorithms-dropdown'
            defaultValue={Object.keys(SORT_ORDER)[0]}
          >
            {Object.values(SORT_ORDER).map(a => (
              <NavDropdown.Item eventKey={a}>{a}</NavDropdown.Item>
            ))}
          </NavDropdown>
          <NavDropdown
            title='Select an algorithm'
            id='algorithms-dropdown'
            defaultValue={Object.keys(ALGORITHMS)[0]}
          >
            {Object.values(ALGORITHMS).map(a => (
              <NavDropdown.Item eventKey={a}>{a}</NavDropdown.Item>
            ))}
          </NavDropdown>
          {this.state.activeAlgorithm && (
            <Button className='ml-1' variant='info'>
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
