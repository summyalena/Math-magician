import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './calculator.css';
import Headers from './Headers';

const Calculator = () => {
  const [obj, setObj] = useState({ total: null, next: null, operation: null });

  const handleEvent = (e) => {
    setObj(calculate(obj, e.target.textContent));
  };
  return (
    <>
      <Headers />
      <div className="overall">
        <div className="text">
          <h2>Lets do some maths</h2>
        </div>
        <div className="calculator">
          <header className="head">
            <span>
              {' '}
              {obj.total}
              {obj.operation}
              {obj.next}
            </span>
          </header>
          <div className="wrap">
            <div className="body">
              <div className="string">
                <button onClick={handleEvent} type="button">AC</button>
                <button onClick={handleEvent} type="button">+/-</button>
                <button onClick={handleEvent} type="button">%</button>
              </div>
              <div className="numbers">
                <button onClick={handleEvent} type="button">7</button>
                <button onClick={handleEvent} type="button">8</button>
                <button onClick={handleEvent} type="button">9</button>
                <button onClick={handleEvent} type="button">4</button>
                <button onClick={handleEvent} type="button">5</button>
                <button onClick={handleEvent} type="button">6</button>
                <button onClick={handleEvent} type="button">1</button>
                <button onClick={handleEvent} type="button">2</button>
                <button onClick={handleEvent} type="button">3</button>
              </div>
              <div className="last-digits">
                <button onClick={handleEvent} type="button">0</button>
                <button onClick={handleEvent} type="button">.</button>
              </div>
            </div>
            <div className="operators">
              <button onClick={handleEvent} type="button">&#xf7;</button>
              <button onClick={handleEvent} type="button">*</button>
              <button onClick={handleEvent} type="button">-</button>
              <button onClick={handleEvent} type="button">+</button>
              <button onClick={handleEvent} type="button">=</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
