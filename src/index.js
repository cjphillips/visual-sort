import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ListElement from 'models/listElements';
import Options from 'views/nav';
import { Node } from 'views/stage';
import { getRandomInt, MAX_ELEMENT_VALUE, MIN_ELEMENT_VALUE } from 'utility';

import QuickSort from 'sorting/algorithms/quicksort';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleRangeChange = this.handleRangeChange.bind(this);
    this.handleAlgChange = this.handleAlgChange.bind(this);
    this.handleOrderChange = this.handleOrderChange.bind(this);
    this.handleStartSort = this.handleStartSort.bind(this);
    this.state = {
      elements: this.getNewElementsList(75),
      sorter: this.tempSorter,
    };
  }

  getNewElementsList = range => {
    let elements = [];
    for (let i = 0; i < range; i++) {
      elements.push(
        new ListElement(getRandomInt(MIN_ELEMENT_VALUE, MAX_ELEMENT_VALUE)),
      );
    }
    return elements;
  };

  tempSorter = elements => {
    return QuickSort(elements);
  };

  handleStartSort = () => {
    console.log('in start sort handler');
    let elements = this.state.sorter(this.state.elements);
    this.setState({ elements });
  };

  handleRangeChange = e => {
    let elements = this.getNewElementsList(e.target.value);
    this.setState({ elements });
  };
  handleAlgChange = e => this.setState({ algorithm: e.target.value });
  handleOrderChange = e => this.setState({ order: e.target.value });

  render() {
    let showValues = this.state.elements.length < 30;
    let widthModifier = this.state.elements.length;

    return (
      <div>
        <Container fluid={true}>
          <Options
            onRangeChange={this.handleRangeChange}
            onAlgChange={this.handleAlgChange}
            onOrderChange={this.handleOrderChange}
            onStart={this.handleStartSort}
          />
        </Container>
        <Container fluid={false}>
          <Container className='mt-5' fluid={true}>
            <Row className='justify-content-md-center'>
              {this.state.elements.map((e, i) => (
                <Col
                  key={`col-${i.toString()}`}
                  className='px-0 mx-0'
                  xs={true}
                >
                  <Node
                    key={`node-${i.toString()}`}
                    value={e.value}
                    showValue={showValues}
                    widthModifier={widthModifier}
                    active={e.active}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
