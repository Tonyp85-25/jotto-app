import { EnzymeAdapter } from 'enzyme'
import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../test/testUtils'
import GuessedWords from './GuessedWords'

const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
}

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<GuessedWords {...setupProps} />)
}

test('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps)
})

describe('if there are no words guessed', () => {
    let wrapper
    beforeEach(() => {
        // set wrapper value before each test
        wrapper = setup({ guessedWords: [] })
    })
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words')
        expect(component.length).toBe(1)
    })
    test('renders instructions to guess a word', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions')
        expect(instructions.text().length).not.toBe(0)
    })
})

describe('if there are words guessed', () => {
    let wrapper
    const guessedWords = [
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'agile', letterMatchCount: 1 },
        { guessedWord: 'party', letterMatchCount: 5 },
    ]
    beforeEach(() => {
        wrapper = setup({ guessedWords })
    })
    test('renders without errors', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words')
        expect(component.length).toBe(1)
    })
    test('renders guessed words section', () => {
        const guessedWordNode = findByTestAttr(wrapper, 'guessed-words')
        expect(guessedWordNode.length).toBe(1)
    })
    test('correct numbers of guessed words', () => {
        const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word')
        expect(guessedWordNodes.length).toBe(guessedWords.length)
    })

    test('renders an index before each word', () => {
        const guessIndex = wrapper.find('.guess-index')
        expect(guessIndex.length).toBe(3)
    })
    test('adds the right index before each word', () => {
        const secondIndex = wrapper.find('.guess-index').at(1)
        expect(secondIndex.text()).toBe('2')
    })
    test('renders total guesses section', () => {
        const totalGuesses = findByTestAttr(wrapper, 'total-guesses')
        expect(totalGuesses.length).toBe(1)
    })
    test('displays the right total', () => {
        const totalGuesses = wrapper.find('span.total-guess')
        const guessedLength = guessedWords.length.toString()
        expect(totalGuesses.text()).toBe(guessedLength)
    })
})
