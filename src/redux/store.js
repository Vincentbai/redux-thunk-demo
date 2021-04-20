/**
 * core component of Redux
 */
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import reducer from './reducer'

// 创建store对象时，内部会第一次调用，发送一个inital action,
// 为了得到初始状态值，之后store将初始的状态数据保存起来
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))