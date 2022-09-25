import React from 'react';
import Headers from './components/Headers';
import './quote.css';

function Quote() {
  return (
    <>
      <Headers />
      <div className="quote">
        <p>Mathematics is not about numbers, equations,</p>
        <p>computations, or algorithms: it is about understanding. - William Paul Thurston</p>
      </div>
    </>
  );
}

export default Quote;
