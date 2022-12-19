# Components
컴포넌트(component)란 여러 개의 프로그램 함수들을 모아 하나의 특정한 기능을 수행할 수 있도록 구성한 작은 기능적 단위   

react에서는 UI쪽 개발할 때 재사용하기 위해 사용

ex. function version
```javascript
function Welcome(props){
    return <h1>Hello, {props.name}</h1>
}
```
ex. class version
```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

렌더링 코드
```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Sara" />;
root.render(element);
```

최종 아웃풋: Hello, Sara

CRA version(현재 typescript로 react입문해서 다음과 같이 작성)
```typescript
import React from 'react';
import './App.css';

// props에 대한 타입정의
type HumanProps = {
  name: String
}

class Welcome extends React.Component<HumanProps>{
  render(): React.ReactNode {
    return <h1>Hello, {this.props.name}</h1>
  }
}

function App() {
  return (
    <div className="App">
      <Welcome name="Sara"/>
    </div>
  );
}

export default App;
```

# State and Lifecycle
State는 props와 유사하지만, 비공개이며 컴포넌트에 의해 완전히 제어됨
```javascript
class Clock extends React.Component{
  render(){
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    </div>
  }
}
```
```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```
많은 컴포넌트가 있는 애플리케이션에서 컴포넌트가 삭제될 떄 해당 컴포넌트가 사용중이던 리소스를 확보하는게 중요
마운트: 처음 DOM에 렌더링 될 떄마다 무언가를 설정
언마운트: 생성된 DOM이 삭제될 때마다 무언가를 해제

컴포넌트 클래스에서 특별한 메서드를 선언하여 컴포넌트가 마운트되거나 언마운트 될 때 일부 코드를 작동시킬수 있음


### State올바르게 사용하기
1. 직접 State를 수정하지 않기
```javascript
// 잘못된 예시
this.state.comment = 'Hello';
```
```javascript
// 올바른 예시
this.setState({comment: 'Hello'});
```
2. State 업데이트는 비동기적일 수도 있음
```javascript
// 잘못된 예시
this.setState({
  counter: this.state.counter + this.props.increment,
})
```
```javascript
// 올바른 예시
this.setState((state,props) => ({
  counter: state.counter + props.increment
}))
```
3. State 업데이트는 병합됨
```javascript
// state는 다양한 독립적인 변수를 포함할 수 있음
constructor(props){
  super(props);
  this.state = {
    posts: [],
    comments: [],
  }
}
```
```javascript
componentDidMount(){
  fetchPosts().then(response => {
    this.setState({
      posts: response.posts
    })
  })

  fetchComments().then(response => {
    this.setState({
      comments: response.comments
    })
  })
}
```
## 도전!(시계를 제작해보자)
