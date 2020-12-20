import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Congrats from './Congrats'
import { findByTestAttr,checkProps } from './test/testUtils';


Enzyme.configure({ adapter: new Adapter() });
const defaultProps = {success:false};
/**
 * Factory function to create a ShallowWrapper for the congrats components
 * @function setup
 * @param {object} props - Component prpos specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<Congrats {...setupProps }/>)
}

test('renders without errors', () =>{
    const wrapper  = setup({success:false});
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1)
});

test('renders no text when success prop is false', () =>{
    const wrapper  = setup({success:false});
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('')
});

test('renders non-empty congrats message when success prop is true', ()=>{
    const wrapper  = setup({success:true});
    const message = findByTestAttr(wrapper,'congrats-message')
    expect(message.length).toBe(1)
})

test('does not throw warning with expected props', ()=>{
    const expectedProps = {success :false};
    checkProps(Congrats,expectedProps)
});