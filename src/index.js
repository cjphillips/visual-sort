import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Options from 'views/nav';
import Node from 'views/node';
import { Algorithms, SortOrder } from 'sorting/definitions';
import { getNewCollection, getNewSorter } from 'utility';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleOnRangeChange = this.handleOnRangeChange.bind(this);
    this.handleOnAlgorithmChange = this.handleOnAlgorithmChange.bind(this);
    this.handleOnListOrderChange = this.handleOnListOrderChange.bind(this);
    this.handleOnStartSort = this.handleOnStartSort.bind(this);
    this.handleShowStep = this.handleShowStep.bind(this);

    this.state = {
      range: 20,
      sortOrder: SortOrder.RANDOM,
      algorithm: Algorithms.QUICK_SORT,
      collection: getNewCollection(20, SortOrder.RANDOM),
      sorter: getNewSorter(Algorithms.QUICK_SORT, this.handleShowStep),
      isSorting: false,
    };
  }

  get shouldShowValues() {
    return this.state.collection.length < 30;
  }

  get widthModifier() {
    return this.state.collection.length;
  }

  handleShowStep = async () => this.forceUpdate();

  handleOnStartSort = async () => {
    this.setState({ isSorting: true });
    await this.state.sorter.sort(this.state.collection);
    this.setState({ isSorting: false });
  };

  handleOnRangeChange = e =>
    this.setState({
      range: e.target.value,
      collection: getNewCollection(e.target.value, this.state.sortOrder),
    });

  handleOnAlgorithmChange = alg =>
    this.setState({
      algorithm: alg,
      sorter: getNewSorter(alg, this.handleShowStep),
    });

  handleOnListOrderChange = order =>
    this.setState({
      sortOrder: order,
      collection: getNewCollection(this.state.range, order),
    });

  render = () => {
    return (
      <div>
        <Container fluid={true}>
          <Options
            selectedRange={this.state.range}
            selectedAlgorithm={this.state.algorithm}
            isSorting={this.state.isSorting}
            onRangeChange={this.handleOnRangeChange}
            onAlgorithmChange={this.handleOnAlgorithmChange}
            onListOrderChange={this.handleOnListOrderChange}
            onStart={this.handleOnStartSort}
          />
        </Container>
        <Container fluid={false}>
          <Container className='mt-5' fluid={true}>
            <Row className='justify-content-md-center'>
              {this.state.collection.map((e, i) => (
                <Col
                  key={`col-${i.toString()}`}
                  className='px-0 mx-0'
                  xs={true}
                >
                  <Node
                    key={`node-${i.toString()}`}
                    value={e.value}
                    showValues={this.shouldShowValues}
                    widthModifier={this.widthModifier}
                    nodeState={e.state}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </Container>
      </div>
    );
  };
}

ReactDOM.render(<App />, document.getElementById('root'));
