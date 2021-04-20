/**
 * action factory functions
 */

import {INCREMENT, DECREMENT} from './action-types'

export const increment = number => ({
      type: INCREMENT,
      data: number
})

// 没有redux-thunk 只能返回对象
export const decrement = number => ({
      type: DECREMENT,
      data: number
})

// 增加的异步action: 返回的是函数
export const incrementAsync  = number => {
      return (dispatch) => {
            // 执行异步(定时器， ajax请求，promise)
            setTimeout(()=>{
                  // 当异步任务执行完成时，分发一同步action
                  dispatch(increment(number))
            },1000)
      }
}



