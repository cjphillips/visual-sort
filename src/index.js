import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Navigation from './models/nav';
import { Stage } from './models/stage';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.state = {
      range: 25,
    };
  }

  handleRangeChange = e => {
    this.setState({ range: e.target.value });
  };

  render() {
    return (
      <div>
        <Container fluid={true}>
          <Navigation onRangeChange={this.handleRangeChange} />
        </Container>
        <Container fluid={false}>
          <Stage range={this.state.range} />
        </Container>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
