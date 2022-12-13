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