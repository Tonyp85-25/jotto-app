import React from 'react'
import PropTypes from 'prop-types'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react/macro'

const GuessedWords = props => {
    let contents
    if (props.guessedWords.length === 0) {
        contents = (
            <span data-test="guess-instructions">Try to guess the secret word!</span>
        )
    } else {
        const guessedWordsRows = props.guessedWords.map((word, index) => (
            <tr data-test="guessed-word" key={index}>
                <td className="guess-index">{index + 1}</td>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ))
        contents = (
            <div>
                <div data-test="guessed-words">
                    <h3>Guessed Words</h3>
                    <table
                        css={css`
                            margin: auto;
                        `}
                    >
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th
                                    css={css`
                                        padding: 1em;
                                        background: black;
                                    `}
                                >
                                    Guess
                                </th>
                                <th
                                    css={css`
                                        padding: 1em;
                                        background: black;
                                    `}
                                >
                                    Matching letters
                                </th>
                            </tr>
                        </thead>
                        <tbody>{guessedWordsRows}</tbody>
                    </table>
                </div>
                <p data-test="total-guesses">
                    Total guess:{' '}
                    <span className="total-guess">{props.guessedWords.length}</span>
                </p>
            </div>
        )
    }
    return <div data-test="component-guessed-words">{contents}</div>
}

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired,
        })
    ).isRequired,
}

export default GuessedWords
