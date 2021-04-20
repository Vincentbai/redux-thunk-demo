/**
 * ruducer funcation module: (prevState, action) -> (nextState)
 */
import {combineReducers} from 'redux'
import {INCREMENT, DECREMENT} from './action-types'

// named the reducer function with the state's name
// preStateCount为什么最后会被count获取
function count(prevStateCount = 1, action){

      console.log(prevStateCount, action)

      switch(action.type){
            case INCREMENT:
                  return prevStateCount + action.data
            case DECREMENT:
                  return prevStateCount - action.data
            default:
                  return prevStateCount
      }
}

const initUser = {}
function user(state = initUser, action){
      switch(action.type){
            default:
                  return state
      }
}

// combinReducers函数: 接受包含所有reducer的函数，返回一个新的reducer函数，大的reducer是一个对象结构
export default combineReducers({

      count: count,
      user: user,

})
