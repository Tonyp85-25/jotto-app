import React, { Component } from 'react'
import { connect } from 'react-redux'
import { guessWord } from './actions'

export class Uninput extends Component {
    render() {
        const contents = this.props.success ? null : (
            <form>
                <input type="text" placeholder="enter guess" data-test="input-box" />
                <button
                    data-test="submit-button"
                    type="submit"
                    onClick={() => this.props.guessWord('train')}
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
