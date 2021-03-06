import { checkPropTypes } from 'prop-types'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../src/reducers'
import { middlewares } from '../src/configureStore'
/**
 * Return node(s) with the given data-test attribute
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`)
}

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name
    )
    expect(propError).toBeUndefined()
}

/**
 * Creates a testing store with imported reducers, middlewares, and initial state
 * @global rootReducer,middlewares
 * @param {object} initialState - Initial state for store
 * @function storeFactory
 * @returns {Store} - Redux store
 */
export const storeFactory = initialState => {
    const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddleWare(rootReducer, initialState)
}
