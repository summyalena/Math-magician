import React from 'react';

import './calculator.css';

const numbers = () => {
  const array = [];
  for (let i = 9; i >= 7; i -= 1) {
    array.push(
      <button type="button" id={i}>{i}</button>,
    );
  }
  return array;
};

const number2 = () => {
  const array = [];
  for (let i = 6; i >= 4; i -= 1) {
    array.push(
      <button type="button" id={i}>{i}</button>,
    );
  }
  return array;
};

const number3 = () => {
  const array = [];
  for (let i = 1; i <= 3; i += 1) {
    array.push(
      <button type="button" id={i}>{i}</button>,
    );
  }
  return array;
};

// };
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator">
        <header className="head">
          <span>0</span>
        </header>
        <div className="wrap">
          <div className="body">
            <div className="string">
              <button type="button">AC</button>
              <button type="button">+/-</button>
              <button type="button">%</button>
            </div>
            <div className="numbers">
              {numbers()}
              {number2()}
              {number3()}
            </div>
            <div className="last-digits">
              <button type="button">0</button>
              <button type="button">.</button>
            </div>
          </div>
          <div className="operators">
            <button type="button">+</button>
            <button type="button">*</button>
            <button type="button">-</button>
            <button type="button">+</button>
            <button type="button">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
