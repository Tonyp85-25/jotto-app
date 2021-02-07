import React, { Component } from 'react'
import { connect } from 'react-redux'
import { guessWord } from './actions'

export class Uninput extends Component {
    /**
     * @method constructor
     * @param {object} props - Component props
     * @returns {undefined}
     */
    constructor(props) {
        super(props)
        this.state = { currentGuess: null }
        this.submitGuessedWord = this.submitGuessedWord.bind(this)
    }
    submitGuessedWord(evt) {
        evt.preventDefault()
        const guessedWord = this.state.currentGuess
        if (guessedWord && guessedWord.length > 0) {
            this.props.guessWord(guessedWord)
            this.setState({ currentGuess: '' })
        }
    }
    render() {
        const contents = this.props.success ? null : (
            <form>
                <input
                    type="text"
                    placeholder="enter guess"
                    data-test="input-box"
                    value={this.state.currentGuess}
                    onChange={evt => this.setState({ currentGuess: evt.target.value })}
                />
                <button
                    data-test="submit-button"
                    type="submit"
                    onClick={evt => this.submitGuessedWord(evt)}
                >
                    Submit
                </button>
            </form>
        )
        return <div data-test="component-input">{contents}</div>
    }
}

const mapStateToProps = ({ success }) => {
    return { success }
}
const mapsDispatchToProps = { guessWord }

export default connect(mapStateToProps, mapsDispatchToProps)(Uninput)
