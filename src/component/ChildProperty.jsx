import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChildProperty extends Component {
  render() {
    return <div>{this.props.children}</div>
    // App 컴포넌트에 포함시킨 ChildProperty 컴포넌트 하위에 자식노드를 배치한 경우
    // <div><span>자식노드</span></div>를 받을 수 있음
    // 출력해 보면 {this.props.children} 위치에 <div><span>자식 노드</span></div>가 나타남
  }
}
ChildProperty.propTypes = {
  children: PropTypes.node,
};
export default ChildProperty
