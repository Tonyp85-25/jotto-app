
import {shallow} from 'enzyme'
import TotalGuesses from './TotalGuesses'

import { findByTestAttr } from '../test/testUtils'

const setup  = (props)=>{
    const wrapper =shallow(<TotalGuesses {...props} ></TotalGuesses> )
    return wrapper
}

describe('success is false',()=>{
    test('does not render',()=>{
        const props ={success:false, number:0}
        const wrapper= setup(props)
        const component =findByTestAttr(wrapper, 'total-guesses')
        expect (component.length).toBe(0)
    })
})

describe('success is true',()=>{
    let wrapper
    const props ={success:true,number:3}
    beforeEach(()=>{
        wrapper = setup(props)
    })
    test('renders with no errors',()=>{
        const component =findByTestAttr(wrapper, 'total-guesses')
        expect(component.length).toBe(1)
    })
    test('displays right number of guesses',()=>{
    const guessNumber= wrapper.find('[data-test="guesses-number"]')
        const number = props.number.toString()
        expect(guessNumber.text()).toBe(number)
    })
})