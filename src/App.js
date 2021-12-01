import Header from './component/Header';
import TodoContainer from './component/TodoContainer';

import './App.css';

function App() {
  return (
    <div class="center"> 
      <h1> Hello World from React! </h1>
    
      <TodoContainer/>
    </div>
    
    
    
    
    /*<div className="App">
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
    </div> */
  );
}

export default App;
