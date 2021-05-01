import React from 'react'
import {useDispatch} from 'react-redux'
import {resetGame} from './actions'

const Reset = ({success})=>{
    const dispatch = useDispatch()
    if(!success){
        return null
    }

    return <div data-test={'reset-component'}>
        <button onClick={( )=> {
           /* event.preventDefault(); */
            dispatch(resetGame())
        }}
        >Reset</button>
    </div>
}

export default Reset