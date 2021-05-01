import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
//import logo from './logo.svg';
import './App.css';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats'
import Input from './Input'
import TotalGuesses from './TotalGuesses'
import Reset from './Reset'
import {getSecretWord} from './actions'
import {useDispatch} from 'react-redux'


function App() {


  const success = useSelector(state=>state.success)
  const secretWord = useSelector(state=>state.secretWord)
  const guessedWords= useSelector(state=>state.guessedWords)
    const dispatch =useDispatch()
  useEffect(() => {
    dispatch(getSecretWord())
      //DEBUG

    
  }, [])

    return (
      <div className="App" data-test='component-app' >
       <h1>Jotto</h1>
          <Reset success={success}></Reset>
           <Congrats success={success} />
           <Input success={success} secretWord={secretWord}/>
           <GuessedWords guessedWords={guessedWords}/>
      <TotalGuesses success={success} number={guessedWords.length}></TotalGuesses>
      </div>
    );
  
  
}

export default App;
