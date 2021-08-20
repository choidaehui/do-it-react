import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 프로퍼티에 기본값 지정하기
class DefaultPropsComponent extends Component {
  render() {
    let message1 = '';
    if (this.props.boolValue === false) {
      message1 = 'boolValue 기본값이 false입니다';
    }
    let message2 = '';
    if (this.props.boolValueWithoutDefault === false) {
      message2 = 'boolValueWithDefault 기본값이 false입니다'
    }
    return (
      <div className="message-container">
        {mesage1}
        {message2}
      </div>
    );
  }
}

DefaultPropsComponent.propTypes = {
  boolValue: PropTypes.bool,
  boolValueWithoutDefault: PropTypes.bool,
};

// 기본값을 선언하는 예제
DefaultPropsComponent.defaultProps = {
  boolValue: false,
  // defaultProps라는 특수 변수를 사용하여 프로퍼티의 기본값을 정의
  // boolValueWithoutDefault에는 undefined가 전달되고, boolValue는 false가 전달
  // 단, 자바스크립트 조건문에서 undefined는 false와 동일하게 취급
}

export default DefaultPropsComponent;

// <DefaultPropsComponent /> 실행 후 출력된 화면에는 
// boolValue 기본값이 false입니다