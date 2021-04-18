import axios from 'axios'

export const actionTypes ={
    CORRECT_GUESS : 'CORRECT_GUESS',
}
/**
 * @function correctGuess
 * @returns {object} - Action object with type 'CORRECT_GUESS'
 */
// export function correctGuess(){
//     return {type:actionTypes.CORRECT_GUESS}
// }

export const getSecretWord = ()=>{
    return axios.get('http://localhost:3030')
    .then(response => response.data)
}

/**
 * Returns redux thunk function that dispatches GUESS_WORD action and (conditionally) CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord - guessedWord
 * @returns {function} - Redux thunk function
 */
export const guessWord  =(guessedWord)=>{
    return function(dispatch,getState){

    }
}