import Header from './component/Header';
import TodoContainer from './component/TodoContainer';
import React from 'react';​
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';​
import Manatee from '../ComponentA/ComponentA';​
import Narwhal from '../ComponentB/ComponentB';​
import Whale from '../ComponentC/ComponentC';
import './App.css';​

function App() {​

  return (​
    
    <div className="App">​
      <h1> Hello World from React! </h1>
      <h1>Route Demo</h1>​
        <BrowserRouter>​
        <nav>​
          <ul>​
            <li><Link to="/compA">ComponentA</Link></li>​
            <li><Link to="/compB">ComponentB</Link></li>​
            <li><Link to="/compC">ComponentC</Link></li>
            </ul>​
            </nav>​

        <Switch>​
          <Route path="/compA">​
            <ComponentA />​
          </Route>​
          <Route path="/compB">​
            <ComponentB />​
          </Route>​
          <Route path="/compC">​
            <ComponentC />​
          </Route>​
        </Switch>​

      </BrowserRouter>​

    </div>​

  );​

}​
export default App;


//function App() {
  //return (
    //<div class="center"> 
      //<h1> Hello World from React! </h1>
    
      //<TodoContainer/>
    //</div>
    
    
    
    
   //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
          //Edit <code>src/App.js</code> and save to reload.
        //</p>
        //<a
          //className="App-link"
          //href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
        //>
          //Learn React
        //</a> 
      //</header> 
    //</div> 
  //);
//}