import {mount} from 'enzyme'
import {findByTestAttr,storeFactory} from '../test/testUtils'
import {Provider} from 'react-redux'
import App from './App';
import {getSecretWord as mockGetSecretWord} from './actions'

// activate global mock to make sure getSecretWord does not make network call
jest.mock('./actions')

/**
 * Setup function for App component
 * @returns {ShallowWrapper}
 */
const setup = ()=>{
  // use mount because useEffect not called on 'shallow'
    const store =storeFactory()
  return mount(<Provider store={store}><App/></Provider>)
}
test('renders without errors', () => {
  const wrapper= setup()
    const appComponent = findByTestAttr(wrapper, 'component-app')
    expect(appComponent).toHaveLength(1)
});

describe('get secret word', ()=>{
  beforeEach(()=>{
    // clear the mocks calls from previous tests
    mockGetSecretWord.mockClear()
  })
  test('get secret word on app mount',()=>{
    const wrapper = setup()
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1)
  })
  test('getSecretWord does not run on app update',()=>{
    const wrapper = setup()
    mockGetSecretWord.mockClear()
    //using setProps because wrapper.update( does not trigger useEffect)
    wrapper.setProps()
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0)
  })
})