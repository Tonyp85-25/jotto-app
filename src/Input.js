import React from 'react'
import PropTypes from 'prop-types'
import {useSelector} from 'react-redux'

const Input = ({secretWord})=>{

    const [currentGuess, setCurrentGuess] = React.useState('')
    const success = useSelector(state=> state.success)
    if(success){
        return <div data-test='input'/>
    }
    return <div data-test='input'>
        <form className="form-inline">
            <input data-test='input-box' type='text' placeholder="enter guess" value={currentGuess} onChange={(event)=> setCurrentGuess(event.target.value)}/>
            <button onClick={event=>{event.preventDefault(); setCurrentGuess('')}} data-test='submit-button'>Submit</button>
        </form>
    </div>
}

Input.propTypes = {
    secretWord:PropTypes.string.isRequired
}
export default Input