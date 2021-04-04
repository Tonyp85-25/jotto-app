import React from 'react';
import {shallow} from 'enzyme';

import Input from './Input'
import { checkProps, findByTestAttr } from '../test/testUtils';

const setup = (props={})=>{
   // const setupProps({...props})
    return shallow(<Input {...props}/>)
}

test('renders without errors',()=>{
    const wrapper =setup({secretWord:''})
   const input= findByTestAttr(wrapper,'input')
   expect(input.length).toBe(1)
})

test('does not throw warning with expected props',()=>{
    const expectedProps = {secretWord:'bla'}
    checkProps(Input,expectedProps)
})

// don't destructure imports in order to use mock functions! (useState can be mocked only if used as React.useState)
describe('state controlled input field',()=>{

    test('state update with value of input box upon change',()=>{
        const mockSetCurrentGuess = jest.fn()
        React.useState = jest.fn(()=>['',mockSetCurrentGuess])
        const wrapper= setup({secretWord:''})
        const inputBox= findByTestAttr(wrapper,'input-box')
        const mockEvent = {target:{value:'train'}}
        inputBox.simulate('change',mockEvent)
        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
    })

})

