import React from 'react';
import PropTypes from 'prop-types'

/**
 * Functional react compoent for congratulatory message.
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Renedered component (or null if success props is false)
 */
const Congrats =  (props) => {
    
        if(props.success){
            return(
            <div data-test="component-congrats">
                <span data-test="congrats-message">
                    Congratulations! You guessed the word!
                </span>
            </div>)
            
        } else{
            return (
                <div data-test="component-congrats"/>
            )
        }
    
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
}
export default Congrats