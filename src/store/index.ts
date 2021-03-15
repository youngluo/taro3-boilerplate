import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import * as rootReducer from './reducers'

const middlewares: any = []

if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
  // eslint-disable-next-line global-require
  middlewares.push(require('redux-logger').createLogger())
}

const enhancer = compose(applyMiddleware(...middlewares))

export default createStore(combineReducers(rootReducer), enhancer)
