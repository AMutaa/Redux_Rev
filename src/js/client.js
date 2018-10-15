import { combineReducers, createStore } from 'redux'

const userReducer = (state = {}, actions) => {
  return state;
};

const tweetsReducer = (state = [], actions) => {
  return state;
};

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
})
const store = createStore(reducers, {

})

store.subscribe(() => {
  console.log('store changed', store.getState())
})

store.dispatch({ type: 'INC', payload: 1 })
store.dispatch({ type: 'INC', payload: 2 })
store.dispatch({ type: 'INC', payload: 22 })
store.dispatch({ type: 'INC', payload: 1 })
store.dispatch({ type: 'DEC', payload: 1000 })