import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, storeFactory } from '../test/testUtils'
import Input, { Uninput } from './Input'

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component
 * @function setup
 * @param {object} initialState - Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<Input store={store} />)
        .dive()
        .dive()
    return wrapper
}

describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapper
        beforeEach(() => {
            const initialState = { success: false }
            wrapper = setup(initialState)
        })
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input')
            expect(component.length).toBe(1)
        })
        test('renders input box', () => {
            const component = findByTestAttr(wrapper, 'input-box')
            expect(component.length).toBe(1)
        })

        test('renders submit button', () => {
            const component = findByTestAttr(wrapper, 'submit-button')
            expect(component.length).toBe(1)
        })
    })
    describe('word has been guessed', () => {
        let wrapper
        beforeEach(() => {
            const initialState = { success: true }
            wrapper = setup(initialState)
        })
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input')
            expect(component.length).toBe(1)
        })
        test('does not render input box', () => {
            const input = findByTestAttr(wrapper, 'input-box')
            expect(input.length).toBe(0)
        })
        test('does not render submit button', () => {
            const button = findByTestAttr(wrapper, 'submit-button')
            expect(button.length).toBe(0)
        })
    })
})

describe('update state', () => {})

describe('guessword action creator call', () => {
    let guessWordMock
    let wrapper
    const guessedWord = 'train'
    beforeEach(() => {
        guessWordMock = jest.fn()
        const props = {
            guessWord: guessWordMock,
        }
        wrapper = shallow(<Uninput {...props} />)
        //add value to input box
        wrapper.setState({ currentGuess: guessedWord })

        const submitBtn = findByTestAttr(wrapper, 'submit-button')
        submitBtn.simulate('click', { preventDefault() {} })
    })
    test('guess word action creator is called on click', () => {
        const guessWordMockCalls = guessWordMock.mock.calls.length
        expect(guessWordMockCalls).toBe(1)
    })
    test('calls guessedWord input value as argument', () => {
        //calls represents an array of different calls with for each on, a list of args (here the first arg for the first call)
        const guessedWordArg = guessWordMock.mock.calls[0][0]
        expect(guessedWordArg).toBe(guessedWord)
    })
})
