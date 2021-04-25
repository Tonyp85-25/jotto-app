import {actionTypes} from '../actions'

/**
 *@function secretWordReducer
 * @param {string} state - State before reducer
 * @param {object} action - Action sent to the reducer
 * @returns {string} - New State (secret word payload from action)
 */
export default (state='',action) =>{
    switch(action.type){
        case actionTypes.SET_SECRET_WORD:
            return action.payload
        default:
            return state
    }
}