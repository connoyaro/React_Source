import './App.css';
//import { Component } from 'react';
import Mycomponent from './Mycomponent';

/*
//함수형 컴포넌트
function App() {
  const name = '리액트';
  return <div className="react">{name}</div>;
}

class App extends Component {
  render() {
    const name = 'react';
    return <div className="react">{name}</div>;
  }
}
*/
const App = () => {
  return (
    <Mycomponent name={'React'} favoriteNumber={3}>
      리액트
    </Mycomponent>
  );
};

export default App;
