import React from 'react'
import {mount} from 'enzyme'
import {Provider} from 'react-redux'
import App from './App'

import {findByTestAttr,storeFactory} from '../test/testUtils'
//FUNCTIONAL TESTS
// activate global mock to make sure getSecretWord does not make network call
jest.mock('./actions')
/**
 * Create wrapper with specific initial conditions,
 * then submit a guess word of 'train'
 * @param {object} state - Initial conditions
 * @returns {Wrapper} - Enzyme Wrapper of mounted App component
 */
const setup = (state={})=>{
    const store = storeFactory(state)
    const wrapper = mount(<Provider store={store}><App></App></Provider>)

    //add value to input box
    const inputBox = findByTestAttr(wrapper,'input-box')
    inputBox.simulate('change', {target:{value:'train'}})

    //simulate click on submit button
    const submitButton = findByTestAttr(wrapper, 'submit-button')
    submitButton.simulate('click', {preventDefault(){}})

    return wrapper
}

describe('no words guessed', ()=>{
    let wrapper
    beforeEach(()=>{
        wrapper =setup({
            secretWord:'party',
            success:false,
            guessedWords:[]
        }) 
    })
    test('creates GuessedWords table with one row',()=>{
        const GuessedWordsRows = findByTestAttr(wrapper, 'guessed-word')
        expect(GuessedWordsRows).toHaveLength(1)

    })
})

describe('some words guessed', ()=>{
    let wrapper
    beforeEach(()=>{
        wrapper =setup({
            secretWord:'party',
            success:false,
            guessedWords:[{guessedWord:'agile', letterMatchCount:1},{guessedWord:'parka',letterMatchCount:3},{guessedWord:'train',letterMatchCount:3}]
        }) 
    })
    test('creates GuessedWords table with three row',()=>{
        const GuessedWordsRows = findByTestAttr(wrapper, 'guessed-word')
        expect(GuessedWordsRows).toHaveLength(4)

    })
})

describe('guess secret word', ()=>{
    let wrapper
    beforeEach(()=>{
        wrapper =setup({
            secretWord:'party',
            success:false,
            guessedWords:[{guessedWord:'agile', letterMatchCount:1}]
        }) 
        //add value to input box
        const inputBox = findByTestAttr(wrapper,'input-box')
        const mockEvent = {target:{value:'party'}}
        inputBox.simulate('change',mockEvent)

        const submitButton = findByTestAttr(wrapper, 'submit-button')
        submitButton.simulate('click', {preventDefault(){}})
    })
    test('adds row to Guessed Word table',()=>{
        const GuessedWordsRows = findByTestAttr(wrapper, 'guessed-word')
        expect(GuessedWordsRows).toHaveLength(3)
    })
    test('displays congrats message',()=>{
        const congrats= findByTestAttr(wrapper, 'component-congrats')
        expect(congrats.text().length).toBeGreaterThan(0)
    })
    test('input component does not display',()=>{
        const inputBox = findByTestAttr(wrapper, 'input-box')
        expect(inputBox.exists()).toBe(false)
    })
})