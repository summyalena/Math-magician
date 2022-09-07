/* eslint-disable react/destructuring-assignment */

import React from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: null, next: null, operation: null };
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(e) {
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState(calculate(this.state, e.target.textContent));
  }

  render() {
    return (
      <div className="calculator">
        <header className="head">
          <span>
            {this.state.total}
            {this.state.next}
            {this.state.operation}

          </span>
        </header>
        <div className="wrap">
          <div className="body">
            <div className="string">
              <button onClick={this.handleEvent} type="button">AC</button>
              <button onClick={this.HandleEvent} type="button">+/-</button>
              <button onClick={this.HandleEvent} type="button">%</button>
            </div>
            <div className="numbers">
              <button onClick={this.handleEvent} type="button">7</button>
              <button onClick={this.handleEvent} type="button">8</button>
              <button onClick={this.handleEvent} type="button">9</button>
              <button onClick={this.handleEvent} type="button">4</button>
              <button onClick={this.handleEvent} type="button">5</button>
              <button onClick={this.handleEvent} type="button">6</button>
              <button onClick={this.handleEvent} type="button">1</button>
              <button onClick={this.handleEvent} type="button">2</button>
              <button onClick={this.handleEvent} type="button">3</button>
            </div>
            <div className="last-digits">
              <button onClick={this.handleEvent} type="button">0</button>
              <button onClick={this.HandleEvent} type="button">.</button>
            </div>
          </div>
          <div className="operators">
            <button onClick={this.handleEvent} type="button">&#xf7;</button>
            <button onClick={this.handleEvent} type="button">*</button>
            <button onClick={this.handleEvent} type="button">-</button>
            <button onClick={this.handleEvent} type="button">+</button>
            <button onClick={this.handleEvent} type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
