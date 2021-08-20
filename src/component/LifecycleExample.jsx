
import React, { Component } from 'react';
// 컴포넌트의 생명주기
// 컴포넌트의 생성부터 소멸까지의 과정
// 컴포넌트는 생명주기마다 함수를 가지고 있고, 이 함수들을 이용하면 특정 시점에 원하는 동작을 하도록 할 수 있음
// render() 함수를 포함하여 총 8종의 함수가 있음
// 리엑트 엔진에서 생명주기 함수를 자동으로 호출
// 개발자가 마음대로 호출할 수 없음
// 생명주기 함수는 리액트에서 지정한 시간에 자동으로 실행
// index.js 파일의 ReactDOM.render() 함수가 실행되면 App 컴포넌트의 최초 생명주기 함수인 constructor()가 실행

class LifecycleExample extends Component {
  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps 호출');
    return {};
    // 함수 안에서 this.props나 this.state와 같은 방법으로 프로퍼티나 state값에 접근할 수 없음
    // 반드시 인자로 전달된 props, state를 이용하여 각 값에 접근
    // 이때 props는 상위 컴포넌트에서 전달된 값이며, state는 현재 컴포넌트의 state값 임
    // 상위 컴포넌트에서 전달받은 프로퍼티로 state값을 연동할 때 이 함수를 사용
    // 반환값으로 state를 변경

  }
  constructor(props) {
    super(props);
    // getDerivedStateFromProps() 함수를 사용하므로
    // 경고 메세지를 건너 뛰기 위해 state 초기값을 설정
    this.state = {};
    console.log('constructor 호출'); 
    // 맨 처음 생성될 때 한 번만 호출
    // state 또는 객체 변수를 선언할 때 사용
    // 항상 super() 함수를 가장 위에 호출
    // super() 함수에는 프로퍼티와 생명 주기 상태 등을 초기화하는 중요한 과정을 포함
  }

  componentDidMount() {
    console.log('componentDidMount 호출');
    // render() 함수가 JSX를 화면에 출력한 후 호출되는 함수
    // 컴포넌트가 화면에 모두 표현된 이후 해야하는 작업들을 함
  }

  componentDidUpdate() {
    console.log('componentDidUpdate 호출');
    // 컴포넌트가 실제 화면에 출력된 이후 호출되는 함수
    // 부모 컴포넌트로부터 전달된 이전 프로퍼티와 이전 state값과 함께 getSnapshotBeforeUpdate() 함수에서
    // 반환된 값(snapshot)을 인자로 전달받음
    // 스크롤 위치를 옮기거나 커서를 이동시키는 등의 DOM 정보를 변경할 때 사용
  }

  componentWillUnmount() {
    console.log('componentWillUnmount 호출');
    // 컴포넌트가 소멸되기 직전에 호출되는 함수
    // 컴포넌트에서 감시하고 있는 작업들을 해제할 때 필요한 함수
    // 예를 들어 컴포넌트에 setInterval() 함수가 사용되었다면 이 함수에서 clearInterval() 함수로 해제
    // 해제 작업이 생략되면 메모리 누수 현상이 발생하여 웹 브라우저 작동이 멈출 수 있음
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate 호출');
    // 컴포넌트의 변경된 내용이 가상 화면에 완성된 이후 호출되는 함수
    // 컴포넌트가 화면에 실제로 출력되기 전에 호출되므로 화면에 출력될
    // 엘리먼트의 크기 또는 스크롤 위치 등의 DOM정보에 접근할 때 사용
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate 호출');
    // 프로퍼티를 변경하거나 setState() 함수를 호출하여 state값을 변경하면 
    // 화면을 새로 출력해야 하는지 판단하는 함수
    // 데이터 변화를 비교하는 작업을 포함하므로 리액트 성능에 영향을 많이 줌
    // 화면 변경을 위해 검증 작업을 해야 하는 경우 이 함수 사용
    // forceUpdate() 함수를 호출하여 화면을 출력할 때 이 함수는 호출되지 않음
  }

  render() {
    console.log('render 호출');
    return null;
    // 데이터가 변경되어 새 화면을 그려야 할 때 자동으로 호출
    // render() 함수가 반환하는 JSX를 화면에 출력
  }
}

export default LifecycleExample;

// 컴포넌트생성 -> constructor -> getDerivedStateFromProp -> render -> componentDidMount -> 생성완료
// -> getDerivedStateFromProps -> shouldComponentUpdate -----> render -> getSnapshotBeforeUpdate -> componentDidUpdate 
// -> 갱신완료                    (false일 때 바로 갱신완료 true일 때 render함수 실행)
// forceUpdate()함수는 컴포넌트 생성완료 후 바로 render함수 실행
// 생성완료, 갱신완료 -> componentWillUnmount -> 소멸완료