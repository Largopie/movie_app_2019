import React from 'react';
import SampleComponent from './SampleComponent';

class App extends React.Component {
  state = {
    count: 0,
    sampleState: true,
  };

  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };

  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };

  changeState = () => {
    this.setState((current) => ({ sampleState: !current.sampleState }));
  };

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
        <br />
        <br />
        <button onClick={this.changeState}>{this.state.sampleState ? 'close' : 'open'}</button>
        {this.state.sampleState && <SampleComponent />}
      </div>
    );
  }
}

export default App;
