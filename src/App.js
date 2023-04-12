import logo from './logo.svg';
import './App.css';

function App() {

  function handleClick() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/');
    xhr.onload = function() {
      if (xhr.status === 200) {
        console.log(xhr.response);
      }else{
        console.log(xhr.response);
      }
    };
    xhr.send();
  }

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
      <button onClick={handleClick}>Get Data</button>
    </div>
  );
}

export default App;
