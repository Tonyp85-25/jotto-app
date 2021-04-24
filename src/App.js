import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
//import logo from './logo.svg';
import './App.css';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats'
import Input from './Input'
import {getSecretWord} from './actions'

function App() {

  //TODO: get props from shared state
  const success = useSelector(state=>state.success)
  const secretWord = 'party'
  const guessedWords= useSelector(state=>state.guessedWords)

  useEffect(() => {
    getSecretWord()
    
  }, [])
 
    return (
      <div className="App" data-test='component-app' >
       <h1>Jotto</h1>
       <Congrats success={success} />
       <Input success={success} secretWord={secretWord}/>
       <GuessedWords guessedWords={guessedWords}/>
      </div>
    );
  
  
}

export default App;
