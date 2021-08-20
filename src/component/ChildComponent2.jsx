import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 객체형 프로퍼티 사용하기
class ChildComponent2 extends Component {
  render() {
    const {
      objValue,
      requiredStringValue,
    } = this.props;

    return (
      <div>
        <div>객체값: {String(Object.entries(objValue))}</div> 
        <div>필수값: {requiredStringValue}</div>
      </div>
    );
    // 내장 함수 String()과 Object.entries()를 사용하여 객체를 문자열로 변환하여 출력
  }
}

ChildComponent2.propTypes = {
  // 객체 프로퍼티
  objValue: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    // 객체 프로퍼티의 자료형은 PropTypes의 shape를 사용하여 정의
    // PropTypes.shape를 사용하여 객체 프로퍼티를 정의하면 객체 목록을 한눈에 확인할 수 있음
  }),
  // 필수 프로퍼티
  // 특정 컴포넌트에 꼭 전달되어야 하는 프로퍼티가 있을 때 해당 프로퍼티를 필수 프로퍼티로 지정
  requiredStringValue: PropTypes.string.isRequired,
  // PropTypes에 정의된 변수(string, object, bool,...)안의 특수 변수 isRequired를 이용하여 
  // requiredStringValue를 필수 프로퍼티로 지정
}

export default ChildComponent2;