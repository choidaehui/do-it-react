import React, { Component } from 'react';

class NewCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.increaseCount = this.increaseCount.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const { count } = props;
    return {
      // 프로퍼티에서 전달된 count값을 보관
      count,
      newCount: count === state.count ? state.newCount : count,
        // 프로퍼티가 변경되지 않았다면 기존 state값으로 설정
        // 프로퍼티가 변경되었다면 변경된 프로퍼티값으로 설정
    };
  }

  increaseCount() {
    this.setState(({ newCount }) => ({
      newCount: newCount + 1
    }));
  }
  render() {
    return (
      <div>
        현재 카운트: {this.state.newCount}
        <button onClick={this.increaseCount}>
          카운트 증가
        </button>
      </div>
    );
  }
}

export default NewCounter;

// 두 컴포넌트 모두 [카운트 증가]버튼을 누르면 숫자가 1씩 올라감
// [20으로 초기화]버튼을 누르면 PrevCounter 컴포넌트의 숫자는 20으로 초기화되지 않음
// NewCounter 컴포넌트만 getDerivedStateFromProps() 함수로 App컴포넌트로부터
// 갱신된 프로퍼티값을 동기화했기 때문
// Counter 컴포넌트는 처음 생성될 때만 프로퍼티 값으로 state값을 설정하므로
// 갱신 과정에서는 state값이 변경되지 않음