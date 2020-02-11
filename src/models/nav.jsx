import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const algorithms = ["Bubble Sort", "Heap Sort", "Merge Sort", "Quick Sort"];

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { activeAlgorithm: null };
  }

  handleSelection = alg => {
    this.setState({
      activeAlgorithm: alg
    });
  };

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Nav
          variant="pills"
          className="mr-auto"
          onSelect={this.handleSelection}
        >
          <NavDropdown
            title="Select an algorithm"
            id="algorithms-dropdown"
            defaultValue={algorithms[0]}
          >
            {algorithms.map(a => (
              <NavDropdown.Item eventKey={a}>{a}</NavDropdown.Item>
            ))}
          </NavDropdown>
        </Nav>
        {this.state.activeAlgorithm && (
          <Nav className="justify-content-end" variant="pills">
            <Button className="mr-4" variant="info">
              Run {this.state.activeAlgorithm}!
            </Button>
          </Nav>
        )}
      </Navbar>
    );
  }
}

export default Navigation;
