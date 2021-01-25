import React from 'react'
import { shallow } from 'enzyme'
import { storeFactory } from '../test/testUtils'
import App, { UnconnectedApp } from './App'
import { getSecretWord } from './actions'

// test('renders without crashing', () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<App/>, div)
//   ReactDOM.unmountComponentAtNode(div)
// });

const setup = (state = {}) => {
    const store = storeFactory(state)
    const wrapper = shallow(<App store={store} />)
        .dive()
        .dive()
    return wrapper
}

describe('redux properties', () => {
    test('has access to succes state', () => {
        const success = true
        const wrapper = setup({ success })
        const successProp = wrapper.instance().props.success
        expect(successProp).toBe(success)
    })

    test('has access to secret word state', () => {
        const secretWord = 'party'
        const wrapper = setup({ secretWord })
        const secretWordProp = wrapper.instance().props.secretWord
        expect(secretWordProp).toBe(secretWord)
    })

    test('has access to guessed word state', () => {
        const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }]
        const wrapper = setup({ guessedWords })
        const guessedWordsProp = wrapper.instance().props.guessedWords
        expect(guessedWordsProp).toEqual(guessedWords)
    })
    test('getSecretWOrd is a function on the props', () => {
        const wrapper = setup()
        const getSecretWordProp = wrapper.instance().props.getSecretWord
        expect(getSecretWordProp).toBeInstanceOf(Function)
    })
})

test('getSecretWord runs on app mount', () => {
    const getSecretWordMock = jest.fn()

    //set up appcomponent with getSecretWordMock
    const props = {
        getSecretWord: getSecretWordMock,
        success: false,
        guessedWords: [],
    }

    const wrapper = shallow(<UnconnectedApp {...props} />)
    wrapper.instance().componentDidMount()
    const getSecretWordCallCount = getSecretWordMock.mock.calls.length
    expect(getSecretWordCallCount).toBe(1)
})
