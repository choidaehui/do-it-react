import React, { Component } from 'react';
import BooleanComponent from './component/BooleanComponent';
import ChildComponent2 from './component/ChildComponent2';
import Counter from './component/Counter';
import LifecycleExample from './component/LifecycleExample';
import NewCounter from './component/NewCounter';
import PrevCounter from './component/PrevCounter';
import StateExample from './component/StateExample';

// 작성된 컴포넌트를 App.js로 불러오기
// import 'MyComponent';의 경우 MyComponent.js > MyComponent.jsx > 파일이 없으면 MyComponent 폴더를 검색 
// 해당 폴더 안에 index.js > index.jsx 순서로 파일을 확인하여 임포트 함
import TodaysPlan from './component/TodaysPlan';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 10 };
    this.resetCount = this.resetCount.bind(this);
  }
  resetCount() {
    this.setState(({ count }) => ({ count: count + 10 }));
  }
  render() {
    return (
       // JSX는 HTML이 아니라 XML 마크업 규칙을 따른다.
       // 엘리먼트의 시작표시와 < 마침 표시의 />의 짝이 맞아야 한다.
       // 컴포넌트를 JSX 안에 마크업 형식으로 추가
      <div>
        <div><PrevCounter count={this.state.count} /></div>
        <div><NewCounter count={this.state.count} /></div>
        <button onClick={this.resetCount}>{this.state.count + 10}으로 초기화</button>
      </div>
    );
  }
}

export default App;

// 컴포넌트 구성 요소
// 1. 프로퍼티: 상위 컴포넌트에서 하위 컴포넌트로 전달되는 읽기 전용 데이터
// 2. state: 컴포넌트의 상태를 저장하고 변경할 수 있는 데이터
// 3. 컨텍스트: 부모 컴포넌트에서 생성하여 모든 자식 컴포넌트에 전달하는 데이터
