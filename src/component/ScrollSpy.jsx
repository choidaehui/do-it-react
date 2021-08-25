
import React, { Component, PureComponent } from 'react';
// 컴포넌트에서 DOM 객체 함수 사용하기
// 컴포넌트에서 window.addEventListener() 함수와 같은 DOM 객체 함수를 사용하려면
// DOM 객체를 컴포넌트 변수에 할당
// 특수 프로퍼티 ref사용
// ref 프로퍼티는 document.getElementById()가 반환하는 객체를 반환
// ref 프로퍼티는 DOM 객체 함수가 필요한 엘리먼트에 콜백함수 형태로 전달


// 화면에서 스크롤 위치를 측정해 현재 컴포넌트의 위치가 화면 안에 있는지 알려주는 컴포넌트
export default class ScrollSpy extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.checkPosition = this.checkPosition.bind(this);
  }
  setRef(ref) {
    this.ref = ref;
    // ref 프로퍼티에서 반환된 객체를 컴포넌트 변수에 할당
  }

  checkPosition() {
    if (this.ref.getBoundingClientRect().top < window.innerHeight) {
      // 현재 DOM 객체의 위치가 스크롤 화면 안팎인지 측정
      console.log('enter');
    }
    else {
      console.log('exit');
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.checkPosition);
    this.checkPosition();
    // 윈도우의 스크롤 이동 이벤트를 감지하여 checkPosition() 함수가 실행되도록 함
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkPosition);
    // 컴포넌트가 소멸할 때 화면 스크롤 감시 함수를 메모리에서 제거
  }
  
  render() {
    return 
      <div ref={this.setRef} />
  }
}

export default ScrollSpy;

// 페이스북에서 스크롤을 내릴 때 자동으로 다음 페이지 목록을 추가할 때 사용
// 화면 스크롤이 변화할 때마다 객체 함수의 위치를 읽어 현재 위치가 화면 안팎인지 측정
// console.log('enter')에 해당하는 부분에 다음 페이지 목록을 추가하는 코드를 구현
// 스크롤이 내려갈 때마다 자동으로 다음 페이지 목록이 추가되도록 구현 가능