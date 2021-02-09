import React from 'react'
import PropTypes from 'prop-types'

function TotalGuess(props) {
    return (
        <p data-test="total-guesses">
            Total guess:
            <span className="total-guess">{props.guesses}</span>
        </p>
    )
}

TotalGuess.propTypes = {
    guesses: PropTypes.number.isRequired,
}

export default TotalGuess
