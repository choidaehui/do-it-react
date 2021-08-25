
import React, { Component } from 'react';

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.increateCount = this.increateCount.bind(this);
    // increateCount()함수가 호출되는 this 범위가 App컴포넌트에 묶임
  }
  render() {
    return (
      <Counter counter={this.state.count} onAdd={this.increateCount} />
    );
  }
}

export default CounterApp;