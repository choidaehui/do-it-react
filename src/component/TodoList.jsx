

import React, { Component, PureComponent } from 'react';

// 배열 컴포넌트의 경우 배열 요소의 개수만큼 반복하므로 성능에 영향
// 배열 컴포넌트에는 키값을 key로 꼭 정의
// 키값을 정의하여 출력한 배열 컴포넌트는 다시 출력하는 경우 리액트 엔진이 기존의 컴포넌트를 재활용 함
// 키값으로 고유한 배열 항목을 사용

class TodoList extends PureComponent {
  render() {
    const todoList = [
      { taskName: '빨래하기', finished: false },
      { taskName: '공부하기', finishd: true },
    ];
    return (
      <div>
        {TodoList.map((todo) => <div key={todo.taskName}>{todo.taskName}</div>)}
      </div>
    );
  }
}

export default TodoList;