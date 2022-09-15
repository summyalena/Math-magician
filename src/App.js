/* eslint-disable */
import React from 'react';
import './App.css';
import Home from './Home';
import Headers from './components/Headers';
// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="App">
         <Headers />
       <Home/>
      </div>
    );
  }
}
export default App;
