import { storeFactory } from '../test/testUtils'
import {guessWord,resetGame} from './actions'

describe('guessWord action dispatcher',()=>{
    const secretWord = 'party'
    const unsuccessfulGuess = 'train'
    describe('no guessed words',()=>{
        let store
        const initialState = {secretWord}
        beforeEach(()=>{
            store = storeFactory(initialState)
        })
        test('updates state correctly for unsuccessful guess',()=>{
            store.dispatch(guessWord(unsuccessfulGuess))
            const newState = store.getState()
            const expectedState = {
                ...initialState,
                success:false,
                guessedWords:[
                    {
                        guessedWord: unsuccessfulGuess,
                        letterMatchCount:3
                    }
                ]
            }
            expect(newState).toEqual(expectedState)
        })
        test('updates state correctly for successful guess',()=>{
            store.dispatch(guessWord(secretWord))
            const newState = store.getState()
            const expectedState = {
                secretWord,
                success: true,
                guessedWords: [
                    {
                        guessedWord: secretWord,
                        letterMatchCount:5
                    }
                ]
            }
            expect(newState).toEqual(expectedState)
        })
    })

    describe('some guessed words',()=>{
        const guessedWords =[{guessWord:'agile',letterMatchCount:1}]
        const initialState = {guessedWords,secretWord}
        let store
        beforeEach(()=>{
            store = storeFactory(initialState)
        })
        test('updates state correctly for unsuccessful guess',()=>{
            store.dispatch(guessWord(unsuccessfulGuess))
            const newState = store.getState()
            const expectedState ={
                secretWord,
                success:false,
                guessedWords:[
                    ...guessedWords,
                    {guessedWord:unsuccessfulGuess,letterMatchCount:3}
                ]
            }
            expect(newState).toEqual(expectedState)

        })
        test('updates state correctly for successful guess',()=>{
            store.dispatch(guessWord(secretWord))
            const newState=store.getState()
            const expectedState ={
                secretWord,
                success:true,
                guessedWords:[
                    ...guessedWords,
                    {guessedWord:secretWord,letterMatchCount:5}
                ]
            }
            expect(newState).toEqual(expectedState)
        })
        test('reset states ',()=>{
            store.dispatch(resetGame())
            //const newStore = storeFactory({secretWord:'blur'})
            const newState = store.getState()
            // const newWord = newState.secretWord
            // expect(newWord).not.toEqual(secretWord)
            expect(newState.success).toBe(false)
            expect(newState.guessedWords.length).toBe(0)

        })
    })
})