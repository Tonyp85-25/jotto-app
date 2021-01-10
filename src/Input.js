import React, { Component } from 'react'
import { connect } from 'react-redux'

class Input extends Component {
    render() {
        const contents = this.props.success ? null : (
            <form>
                <input type="text" placeholder="enter guess" data-test="input-box" />
                <button data-test="submit-button" type="submit">
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

export default connect(mapStateToProps)(Input)
