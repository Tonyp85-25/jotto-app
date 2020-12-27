import React, {Component} from 'react'
//import logo from './logo.svg';
import './App.css';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats'

class App extends Component {
  render(){
    return (
      <div className="App">
       <h1>Jotto</h1>
       <Congrats success={false} />
       <GuessedWords guessedWords={[]}/>
      </div>
    );
  }
  
}

export default App;
