import React, { Component } from 'react';

// state: 값을 저장하거나 변경할 수 있는 객체
// 버튼을 클릭하거나 값을 입력하는 등의 이벤트와 함께 사용
// 예를 들어 어떤 버튼을 눌렀을 때 버튼 색을 변경하거나 글씨 모양을 바꿀 때 사용
class StateExample extends Component {
  constructor(props) {
    super(props);
    // state 정의
    this.state = {
      // 컴포넌트에서 관리하려는 변수 state 초기값을 this.state에 객체 형태로 정의
      loading: true,
      formData: 'no data',
    };
    this.handleData = this.handleData.bind(this);
    // 함수로 넘어갈 this는 반드시 생성자에서 bind()함수로 묶어준다
    setTimeout(this.handleData, 4000);
    // 4초 후에 handleData 함수를 호출
  }
    handleData() {
      const data = 'new data';
      const { formData } = this.state;
      // 컴포넌트 특수 변수 this.state를 사용하여 state값에 접근
      // state 변경
      this.setState({
        loading: false,
        formData: data + formData,
      });
      // 컴포넌트 내장 함수 this.setState()를 사용하여 state값을 변경
      // this.state.loading은 현재 true입니다.
      // 이후 호출된 render()함수에서의 this.state.loading은 false입니다
      console.log('loading값', this.state.loading);
    }
  render() {
    return (
      // state 데이터는 this.state로 접근 가능
      <div>
        <span>로딩중: {String(this.state.loading)}</span>
        <span>결과: {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample;
// App 컴포넌트에 넣어 화면에 츨력해 보면
// <StateExample />
// 로딩중: true결과: no data
// 4초 후 state에 저장된 값이 바뀌어 화면에 출력 됨
// 로딩중: false결과: new datano data

// state를 사용할 때 주의할 점
// 생성자(constructor)에서 반드시 초기화
// state값을 변경할 때는 setState()함수를 반드시 사용
// setState()함수는 비동기로 처리, setState()코드 이후로 연결된 함수들의 실행이 완료된 시점에 화면 동기화 과정을 거침
// state에 저장되는 객체는 반드시 초기화해야 함
// 마땅한 초기값이 없다면 state에 빈 객체라도 넣어야 함 this.state = {};
// state에 저장되는 객체의 값은 직접 변경하면 안됨
// 그 이유는 state값을 직접 변경해도 render()함수는 새로 호출되지 않음
// setState()함수를 호출하여 state값을 변경하면 리엑트 엔진이 자동으로 render()함수를 호출하여 
// 화면에 변경된 state값을 새롭게 출력

// setState()함수의 인자로 함수를 전달하면 이전 state값을 쉽게 읽을 수 있음
// handleData(data) {
//     this.setState(function(prevState){
//       const newState = {
//         loading: false,
//         formData: data + prevState.formData,
//       };
//       return newState;
//     });
//  }
// 화살표 함수를 사용하면?
// handleData(data) {
//     this.setState(prevState => ({
//         loading: false,
//         formData: data + prevState.formData
//       }));
//  }

// forceUpdate()함수
// 클래스 인스턴스 변수와 화면을 강제로 출력
// 리엑트 성능에 제약이 있기 때문에 매번 새롭게 화면을 출력해야 되는 경우가 아니면 사용 자제


