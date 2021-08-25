
import React, { Component } from 'react';

class Counter3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increateCount = this.increateCount.bind(this);
    this.resetCount = this.resetCount.bind(this);
  }
  increateCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }
  resetCount() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div>
        현재 카운트: {this.state.count}
        <button onClick={this.increateCount} onMouseOut={this.resetCount}>
          카운트 증가  
        </button>
        버튼 밖으로 커서가 움직이면 0으로 초기화       
      </div>
    );
  }
}

export default Counter3;
// 리액트는 프로퍼티, state와 같은 데이터를 상위 컴포넌트에서 하위 컴포넌트 방향으로 전달
// 데이터 변경이 필요한 경우 콜백 함수를 호출하여 원본데이터가 위치한 상위 컴포넌트에서 
// 데이터를 변경하고 다시 자식 컴포넌트로 전달하도록 함
// 이러한 단방향 흐름 방식은 원본 데이터의 무결성을 지켜주므로 데이터 수정으로 인한 
// 데이터 파편화를 줄여줌