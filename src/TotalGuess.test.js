import { shallow } from 'enzyme'
import { findByTestAttr } from '../test/testUtils'
import TotalGuess from './TotalGuess'

const setup = (props = {}) => {
    const setupProps = { ...props }
    return shallow(<TotalGuess {...setupProps} />)
}

describe('words have been guessed', () => {
    let wrapper
    beforeEach(() => {
        wrapper = setup({ guesses: 3 })
    })
    test('renders total guesses section', () => {
        const totalGuesses = findByTestAttr(wrapper, 'total-guesses')
        expect(totalGuesses.length).toBe(1)
    })
    test('displays the right total', () => {
        const totalGuesses = wrapper.find('span.total-guess')
        const guessed = totalGuesses.props().children.toString()
        expect(totalGuesses.text()).toBe(guessed)
    })
})
// describe('no words guessed', ()=>{
//     let wrapper;
//     beforeEach(()=>{
//         wrapper =setup({guesses : 0})
//     })
//     test('does not renders if 0 guess',()=>{
//         const totalGuesses = findByTestAttr(wrapper, 'total-guesses')
//         expect(totalGuesses.length).toBe(0)
//     })
// })
