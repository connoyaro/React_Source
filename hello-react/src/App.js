//import logo from './logo.svg';
import './App.css';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

//if 문 대신 조건부 연산자
function App() {  
  const name = '리엑트1'

  return (
    <div>
      {name === '리엑트'?
       (<h1>리엑트 입니다!</h1>)
      :(<h1>리엑트가 아닙니다!</h1>)  
      }
    </div>
  );
}

// AND 연사자(&&)를 사용한 조건부 렌더링
function App() {  
  const name = '리엑트'

  return (   
    <div>{name ==='리엑트' && <h1>리엑트 입니다.</h1>}</div>
  );
}


function App() {  
  const name = undefined;
  //return name;
  //return name || '값이 undefined입니다.';
  //return <div>{name}</div>; 
  return <div>{name || '리엑트'}</div>; 
}

function App() {  
  const name = '리액트';
  const style = {
    //background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성된다.
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px', //font-size --> fontSize
    fontWeight: 'bold', //font-weight --> fontWeight
    padding: 16 //단위를 생략하면 px로 지정된다.
  };
  return (   
    <div style={style}>{name}</div>
  );
}



function App() {  
  const name = '리액트';
  return <div className="react">{name}</div>; 
}
*/

function App() {  
  const name = '리액트';
  return (
    <>
      <div className="react">{name}</div>
      <input></input>
    </>
  ); 
}

export default App;
