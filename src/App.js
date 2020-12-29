/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react/macro'
import React, {Component} from 'react'

//import logo from './logo.svg';

//import './App.css';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats'

const appStyle = css`
 
  text-align:center;
  background: linear-gradient(45deg, #656e99, #e46a6af5);
  margin: 2em;
  color:white;
  font-family: 'Lobster', cursive;
  `

class App extends Component {
  render(){
    return (
      <div css={appStyle} >
       <h1 css={css`background: darkslateblue;
    margin: 1px 40%;
    padding: 1em`}>Jotto</h1>
       <Congrats success={true} />
       <GuessedWords guessedWords={[]}/>
      </div>
    );
  }
  
}

export default App;
