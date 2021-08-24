
import React from 'react';
import PropTypes from 'prop-types';

function SFC(props, context) {
  // 클래스형 컴포넌트의 this.props값과 동일
  const { somePropValue } = props;
  // 클래스형 컴포넌트의 this.context와 동일
  const { someContextValue } = context;
  return <h1>Hello, {somePropValue}</h1>
}

SFC.propTypes = { somePropValue: PropTypes.any };
SFC.defaultProps = { somePropValue: 'default value'};

export default SFC;

// 함수형 컴포넌트는 state를 포함하지 않으며 데이터를 받아 출력할 컴포넌트를 반환
// 함수형 컴포넌트에는 클래스 선언이 없고, 상위 컴포넌트로부터 전달받은 프로퍼티와 
// 컨텍스트만을 이용하여 화면을 구성
// state와 생명주기 함수를 사용할 수 없음