import {connect} from 'react-redux'

import Counter from '../components/Counter'
// import {incrementAction, decrementAction, incrementActionAsync} from '../redux/action-creators'
import {increment, decrement, incrementAsync} from '../redux/action-creators'

/**
 *  react-redux 容器组件: 通过connect包装UI组件产生的组件
 *  connect(): 高阶函数
 *  connect()的返回函数是一个高阶组件: 接受一个UI组件(e.g. Counter)，生成一个容器组件
 *  容器组件的责任: 向 UI 组件传入特定的属性
 */


// // 用来将redux管理的state数据映射成UI组件的一般属性函数
// function mapStateToProps(state){

//   // 不是将返回的整个对象传递过去，而是将对象中属性传递过去
//   return{
//     count: state
//   }
// }

// // 将**包含dispatch**代码的函数映射成UI组件的函数属性的函数
// // 如果是函数，会自动调用得到对象，将对象中的方法作为函数属性传入UI组件
// function mapDispatchToProps(dispatch){

//   return{
//     increment: (number)=> dispatch(incrementAction(number)),
//     decrement: (number)=> dispatch(decrementAction(number)),
//     incrementAsync: (number) => incrementActionAsync(number),
//   }
// }

// export default connect(
//   mapStateToProps, //指定一般属性
//   mapDispatchToProps, // 指定函数属性
// )(Counter)

/**
 * final version
 */

export default connect(

  state => ({count: state.count}),
  // ** 这两个值并不是上面引入的action，但是必须action的名字和要传入的props的属性名一致
  {increment, decrement, incrementAsync},

)(Counter)