import React from 'react';
import './App.css';
import NewCalculator from './components/newCalculator';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NewCalculator />
      </div>
    );
  }
}
export default App;
