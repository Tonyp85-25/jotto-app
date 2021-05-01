import {mount} from 'enzyme'
import { Provider } from 'react-redux'
import Reset from './Reset'
import { findByTestAttr, storeFactory } from '../test/testUtils'


const setup = (props={}) =>{
    const initialState = {}
    const store = storeFactory(initialState)
    const wrapper = mount(<Provider store={store}><Reset {...props}></Reset></Provider>)
    return wrapper
}

describe('success is false',()=>{
    test('reset component does not render',()=>{
        const wrapper = setup({success:false})
        const resetComp = findByTestAttr(wrapper, 'reset-component')
        expect(resetComp.length).toBe(0)
    })
})

describe('success is true',()=>{
    let wrapper
    beforeEach(()=>{
        wrapper = setup({success:true})
    })
    test('renders correctly',()=>{
        const resetComp = findByTestAttr(wrapper, 'reset-component')
        expect(resetComp.length).toBe(1)
    })

    test('reset game on click',()=>{
        const resetComp = findByTestAttr(wrapper, 'reset-component')
       const button = resetComp.find('button')
        button.simulate('click')
    })
})