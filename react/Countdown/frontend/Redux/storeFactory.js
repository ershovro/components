import {createStore, combineReducers, applyMiddleware} from 'redux'
import {count} from './reducers'

const logger = store => next => action => {
   let result
   
   console.groupCollapsed("dispatching", action.type)
   console.log('prev state', store.getState())
   console.log('action', action)
   result = next(action)
   console.log('next state', store.getState())
   console.groupEnd()
}

const storeFactory = (initialState = {count: 10}) =>  
   applyMiddleware(logger)(createStore)(
      combineReducers({count}),
      initialState
   ) 

export default storeFactory