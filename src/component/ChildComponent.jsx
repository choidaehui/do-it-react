
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends Component {
  // 프로퍼티는 상위 컴포넌트가 하위 컴포넌트에 값을 전달할 때 사용
  // 프로퍼티 값은 수정할 수 없다
  // 프로퍼티에서는 자바스크립트의 자료형을 모두 사용할 수 있음
  // 프로퍼티의 자료형은 미리 선언해주는 것이 좋음

  render() {
    const {
      boolValue,
      numValue,
      arrayValue,
      objValue,
      nodeValue,
      funcValue,
    } = this.props;
    // 프로퍼티에 전달된 값들을 render()함수 내의 지역 변수로 재정의
    // 프로퍼티에 문자열을 전달할 때는 큰 따옴표를 사용(" ")
    // 숫자형이나 불리언 등의 값을 전달할 때는 중괄호({ })를 사용
    // this.props.boolValue에서 boolValue와 같이 this.props를 제외하는 방법으로 프로퍼티에 접근 가능
    return (
      <div>
        <span>불리언값: {boolValue}</span>
        <span>숫자값: {numValue}</span>
        <span>배열값: {arrayValue}</span>
        <span>객체값: {String(objValue)}</span>
        <span>노드값: {nodeValue}</span>
        <span>함수값: {String(funcValue)}</span>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  objValue: PropTypes.object,
  nodeValue: PropTypes.node,
  funcValue: PropTypes.func,
  // 객체 형태로 프로퍼티의 자료형을 정의 함 
}
export default ChildComponent;