/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react/macro'
import React, { Component } from 'react'
import { connect } from 'react-redux'

//import logo from './logo.svg';

//import './App.css';
import GuessedWords from './GuessedWords'
import Congrats from './Congrats'
import Input from './Input'
import { getSecretWord } from './actions'

//#e46a6af5
const appStyle = css`
    text-align: center;
    background: linear-gradient(45deg, #656e99, #3abfa0f5);
    margin: 2em;
    color: white;
    font-family: 'Bangers', cursive;
    letter-spacing: 3px;
`

class App extends Component {
    render() {
        return (
            <div css={appStyle}>
                <h1
                    css={css`
                        background: darkslateblue;
                        margin: 1px 40%;
                        padding: 1em;
                    `}
                >
                    Jotto
                </h1>
                <Congrats success={this.props.success} />
                <Input />
                <GuessedWords guessedWords={this.props.guessedWords} />
            </div>
        )
    }
}
const mapsStateToProps = state => {
    const { success, guessedWords, secretWord } = state
    return { success, guessedWords, secretWord }
}

export default connect(mapsStateToProps, { getSecretWord })(App)
