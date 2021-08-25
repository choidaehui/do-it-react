
import React, { Component } from 'react';

// 자바스크립트 배열은 다양한 자료형을 저장
const numberList = [1, 2, 3, 4, 5]; 
// 숫자형
const mixedList = [1, 'str', {}, function a() {}];
// 2개 이상의 자료형

const componentList = [<MyComponent />, <MySecondComponent />, <b>Hi</b>];
// JSX 배열

// 배열 컴포넌트를 위한 map()함수 사용 방법
// map() 함수를 사용하면 배열로 저장된 데이터를 바로 JSX로 변경
// todoList에 저장된 객체를 map()함수를 통해 JSX로 변경

const todoList = [
  { taskName: '빨래하기', finished: false },
  { taskName: '공부하기', finished: true },
];

const todos = todoList.map(todo => <div>{todo.taskName}</div>);
// 결과
// [<div>빨래하기</div>, <div>공부하기</div>]

// 컴포넌트 형태의 JSX로 변경
// todoList에 저장된 객체를 JSX로 변경

const todos = todoList.map(todo => <TodoTask />);
// 결과
// [<TodoTask />, <todoTask />]

// 배열 데이터를 컴포넌트의 프로퍼티에 전달
const todoList = [
  { taskName: '빨래하기', finished: false },
  { taskName: '공부하기', finished: true },
];
const todos = todoList.map(todo => <TodoTask taskName={todo.taskName} />);
// 결과
// [<TodoTask taskName="빨래하기" />, <TodoTask taskName="공부하기" />]

class ListExample extends Component {
  render() {
    const priceList = [1000, 2000, 3000, 4000];
    const prices = priceList.map((price) => (<div>가격: {price}원</div>);
    return (
      <div>
        <label>가격 목록</label>
        {prices}
      </div>
    );
  }
}

export default ListExample;