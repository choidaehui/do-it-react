import React, { Component } from 'react'

// 버튼을 누를 때 숫자가 증가하는 카운터 컴포넌트 만들기
class Counter extends Component {
  constructor(props) {
    super(props)
    // state 정의
    this.state = {
      count: 0,
    }
    this.increaseCount = this.increaseCount.bind(this)
  }

  increaseCount() {
    // state 변경
    this.setState(({count}) => ({
      count: count += 1,
    }))
    console.log(`state 변경 ${this.state.count}`)
  }
  render() {
    return (
      <div>
        <span>카운트: {this.state.count}</span>
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    )
  }
}

export default Counter
