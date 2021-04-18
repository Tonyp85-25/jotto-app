import { checkPropTypes } from "prop-types"
import {createStore} from 'redux'
import rootReducer from '../src/reducers'

/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper 
 * @param {string} val 
 * @returns {ShallowWrapper}
 */
export const  findByTestAttr = (wrapper, val)=>{
   return wrapper.find(`[data-test='${val}']`)
}

export const checkProps = (component,conformingProps) =>{
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name);
    expect(propError).toBeUndefined();
}

/**
 * Create a testing store with imported reducers, middleware and initial state
 * globals: rootReducer
 * @param {object} initialState - Initial state for store
 * @function storeFactory
 * @returns {Store} - Redux Store
 */
export const storeFactory = (initialState)=>{
    return createStore(rootReducer,initialState)
}