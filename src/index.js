import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {} from './sorting/algorithm';

import Navigation from 'views/nav';
import { Stage } from 'views/stage';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.handleAlgChange = this.handleAlgChange.bind(this);
    this.handleOrderChange = this.handleOrderChange.bind(this);
    this.state = {
      range: 25,
    };
  }

  handleRangeChange = e => this.setState({ range: e.target.value });
  handleAlgChange = e => this.setState({ algorithm: e.target.value });
  handleOrderChange = e => this.setState({ order: e.target.value });

  render() {
    return (
      <div>
        <Container fluid={true}>
          <Navigation
            onRangeChange={this.handleRangeChange}
            onAlgChange={this.handleAlgChange}
            onOrderChange={this.handleOrderChange}
          />
        </Container>
        <Container fluid={false}>
          <Stage range={this.state.range} />
        </Container>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
