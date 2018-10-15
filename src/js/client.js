import { combineReducers, createStore } from 'redux'

const userReducer = function (state = {}, actions) => {

};

const tweetsReducer = function (state, actions) => {


};

const reducers = combineReducers({
  user: userReducer
})
const store = createStore(reducer, {
  user: {
    name: 'Will',
    age: 35,
  },
  tweets: []
})

store.subscribe(() => {
  console.log('store changed', store.getState())
})

store.dispatch({ type: 'INC', payload: 1 })
store.dispatch({ type: 'INC', payload: 2 })
store.dispatch({ type: 'INC', payload: 22 })
store.dispatch({ type: 'INC', payload: 1 })
store.dispatch({ type: 'DEC', payload: 1000 })