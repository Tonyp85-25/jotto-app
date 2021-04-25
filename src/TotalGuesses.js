import{React} from 'react'

const TotalGuesses = ({success,number})=>{
    if (!success){
        return null
    }else{
        return <div data-test="total-guesses">
            <p>Total guesses: <span data-test="guesses-number">{number}</span></p>
        </div>
    }

}

export default TotalGuesses