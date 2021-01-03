import React from 'react'
import PropTypes from 'prop-types'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react/macro'

/**
 * Functional react compoent for congratulatory message.
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Renedered component (or null if success props is false)
 */
const Congrats = props => {
    if (props.success) {
        return (
            <div
                data-test="component-congrats"
                css={css`
                    margin-top: 3em;
                    margin-bottom: 3em;
                `}
            >
                <span
                    data-test="congrats-message"
                    css={css`
                        background: lawngreen;
                        padding: 1em;
                    `}
                >
                    Congratulations! You guessed the word!
                </span>
            </div>
        )
    } else {
        return <div data-test="component-congrats" />
    }
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
}
export default Congrats
