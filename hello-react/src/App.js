//import logo from './logo.svg';
//import './App.css';
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
*/
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

export default App;
