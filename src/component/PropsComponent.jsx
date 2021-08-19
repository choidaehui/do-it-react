import React, { Component } from 'react'
import PropTypes from 'prop-types'
// prop-types 라이브러리를 PropTypes라는 이름으로 임포트 함

class PropsComponent extends Component {
  render() {
    return (
      <div className="message-container">{this.props.name}</div>
      // name 프로퍼티로 받은 문자열을 출력
    )
  }
}

// 프로퍼티의 자료형을 선언(문자열형 프로퍼티)
PropsComponent.propTypes = {
  // PropsComponent의 propTypes라는 특수변수를 사용하여 프로퍼티의 자료형을 정의
  name: PropTypes.string,
  // 프로퍼티의 자료형을 객체 형태로 지정하여 PropsCompoment.propTypes에 저장
}

export default PropsComponent
