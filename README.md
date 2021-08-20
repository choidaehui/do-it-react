# do-it-react 스터디 파일
``` javascript
      import React, { Component } from 'react';
      import ChildComponent from './component/ChildComponent';

      // 작성된 컴포넌트를 App.js로 불러오기
      // import 'MyComponent';의 경우 MyComponent.js > MyComponent.jsx > 파일이 없으면 MyComponent 폴더를 검색 
      // 해당 폴더 안에 index.js > index.jsx 순서로 파일을 확인하여 임포트 함
      import TodaysPlan from './component/TodaysPlan';

      class App extends React.Component {
        render() {
          const array = [1, 2, 3];
          const obj = { name: '제목', age: 30 };
          const node = <h1>노드</h1>;
          const func = () => { console.log('메시지'); };
          return (
            // JSX는 HTML이 아니라 XML 마크업 규칙을 따른다.
            // 엘리먼트의 시작표시와 < 마침 표시의 />의 짝이 맞아야 한다.
            // 컴포넌트를 JSX 안에 마크업 형식으로 추가
            <ChildComponent
              boolValue={true}
              numValue={1}
              arrayValue={array}
              objValue={obj}
              nodeValue={node}
              funcValue={func}
              // 실무에서는 배열, 객체, 노드, 함수를 변수에 담아 전달
            />  
          );
        }
      }

      export default App;

      import React, { Component } from 'react';
      import BooleanComponent from './component/BooleanComponent';

      class App extends React.Component {
        render() {
          return (
            <div>
              <div><b>지루할 때:</b><BooleanComponent bored /></div>
              <div><b>즐거울 때:</b><BooleanComponent /></div>
            </div>
            // <BooleanComponent bored />는 프로퍼티에 true 전달
            // <BooleanComponent />는 프로퍼티에 false 전달
          );
        }
      }

      export default App;
```      
