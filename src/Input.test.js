import React from 'react';
import {shallow} from 'enzyme';

import Input from './Input'
import { checkProps, findByTestAttr } from '../test/testUtils';

const setup = (success=false,secretWord='party')=>{
   // const setupProps({...props})
    return shallow(<Input success={success} secretWord={secretWord}/>)
}
describe('render',()=>{
    describe('success is true',()=>{
        let wrapper
        beforeEach(()=>{
            wrapper =setup(true)
        })
        test('renders without errors',()=>{
            const input= findByTestAttr(wrapper,'input')
            expect(input.length).toBe(1)
        })
        test('input box does not show',()=>{
            const inputBox = findByTestAttr(wrapper,'input-box')
            expect(inputBox.exists()).toBe(false)
        })
        test('submit-button does not show',()=>{
            const submitBtn =findByTestAttr(wrapper,'submit-button')
            expect(submitBtn.exists()).toBe(false)
        })

    })
    describe('success is false',()=>{
        let wrapper
        beforeEach(()=>{
            wrapper =setup()
        })
        test('input renders without errors',()=>{
            const input= findByTestAttr(wrapper,'input')
            expect(input.length).toBe(1)
        })
        test('input box is visible',()=>{
            const inputBox = findByTestAttr(wrapper,'input-box')
            expect(inputBox.exists()).toBe(true)
        })
        test('submit-button is visible',()=>{
            const submitBtn =findByTestAttr(wrapper,'submit-button')
            expect(submitBtn.exists()).toBe(true)
        })
    })
})


test('does not throw warning with expected props',()=>{
    const expectedProps = {secretWord:'bla'}
    checkProps(Input,expectedProps)
})

// don't destructure imports in order to use mock functions! (useState can be mocked only if used as React.useState)
describe('state controlled input field',()=>{
    let wrapper
    let mockSetCurrentGuess = jest.fn()
    beforeEach(()=>{
        mockSetCurrentGuess.mockClear()
        React.useState = jest.fn(()=>["", mockSetCurrentGuess])
        wrapper= setup()
    })

    test('state update with value of input box upon change',()=>{

        React.useState = jest.fn(()=>['',mockSetCurrentGuess])
        const inputBox= findByTestAttr(wrapper,'input-box')
        const mockEvent = {target:{value:'train'}}
        inputBox.simulate('change',mockEvent)
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
    })

    test('field is cleared upon submit button click',()=>{
        const submitBtn =findByTestAttr(wrapper,'submit-button')
        submitBtn.simulate('click',{preventDefault(){}})
        expect(mockSetCurrentGuess).toHaveBeenCalledWith("")
    })

})

