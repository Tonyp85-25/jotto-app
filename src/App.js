import React, {useEffect} from 'react'
//import logo from './logo.svg';
import './App.css';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats'
import Input from './Input'
import {getSecretWord} from './actions'

function App() {

  //TODO: get props from shared state
  const success =false
  const secretWord = 'party'
  const guessedWords= []

  useEffect(() => {
    getSecretWord()
    
  }, [])
 
    return (
      <div className="App" data-test='component-app' >
       <h1>Jotto</h1>
       <Congrats success={false} />
       <Input success={success} secretWord={secretWord}/>
       <GuessedWords guessedWords={guessedWords}/>
      </div>
    );
  
  
}

export default App;
