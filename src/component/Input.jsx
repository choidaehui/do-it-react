

import React, { Component, PureComponent } from 'react';

// input 컴포넌트 만들기
class Input extends PureComponent {
  // 클래스형 컴포넌트의 PureComponent 형태로 작성
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, onChange } = this.props;
    if(onChange) {
      onChange(name, e.target.value);
    }
  }
  componentDidMount() {
    if(this.props.autoFocus) {
      // autoFocus값이 true일 경우 출력 후 input박스에 자동으로 커서를 배치
      this.refs.focus();
    }
  }
  componentDidUpdate() {
    if(this.props.autoFocus) {
      this.refs.focus();
    }
  }
  setRef(ref) {
    this.ref = ref;
  }
  render() {
    const { errorMessage, label, name, value, type, onFocus } = this.props;
    return (
      <label>
        {label}
        <input 
          id={`input_${name}`}
          ref={this.setRef}
          onChange={this.handleChange}
          // input값이 변경될 때 onChange콜백 함수를 호출
          onFocus={onFocus}
          // 프로퍼티로 전달받은 콜백함수를 DOM 이벤트 프로퍼티에 연결하여 input에 마우스 커서가
          // 포커스 될 때 상위 컴포넌트의 콜백 함수를 호출
          value={value}
          type={type} 
          />
          {errorMessage && <span className="error">{errorMessage}</span>}
      </label>
      // errorMessage가 존재할 경우 출력
    );
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'price']),
  // 문자열형의 값 'text', 'number', 'price' 중 하나의 값만 가질 수 있음
  name: PropTypes.string.isrequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  autoFocus: PropTypes.bool,
};
Input.defaultProps = {
  onChange: () => {},
  onFocus: () => {},
  autoFocus: false,
  type: 'text',
  // type의 기본값은 'text'
};

export default Input;