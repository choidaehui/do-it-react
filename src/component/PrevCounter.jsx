
import React, { Component } from 'react';

// 카운터 프로그램 만들며 생명주기 함수 사용해 보기
// 부모 컴포넌트로부터 count의 초기값을 전달받아 숫자를 증가하는 카운터 프로그램
class PrevCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // count 초기값을 프로퍼티에서 전달된 값으로 설정
      count: props.count,
    };
    this.increaseCount = this.increaseCount.bind(this);
  }
  increaseCount() {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  }
  render() {
    return (
      <div>
        현재 카운트: {this.state.count}
        <button onClick={this.increaseCount}>
          카운트 증가
        </button>
      </div>
    );
  }
}

export default PrevCounter;