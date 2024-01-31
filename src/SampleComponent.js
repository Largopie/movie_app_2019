import React from 'react';

class SampleComponent extends React.Component {
  componentWillUnmount() {
    console.log('ComponentWillUnmount');
  }

  render() {
    return <div>Hi! I'm Alive</div>;
  }
}

export default SampleComponent;
