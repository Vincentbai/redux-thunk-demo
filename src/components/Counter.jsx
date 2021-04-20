import React, {Component} from 'react'
import PropTypes from 'prop-types'

// import {incrementAction, decrementAction} from './redux/action-creators'

/**
 *  react-redux UI组件
 */
export default class Counter extends Component{

  static propTypes = {
    // v2.0 非react-redux版本
    // 使用react-redux后，没有直接传入的store了
    // store: PropTypes.object.isRequired

    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
  }

  constructor(props){
    super(props)

    // v1.0: 非 redux 版本
    // this.state = {
    //   count:0
    // }

    this.numberRef = React.createRef()
  }

  increment = () =>{
    // * 1 convert to number
    const number = this.numberRef.current.value * 1

    // v1.0: 非 redux 版本
    // this.setState(state =>({count: state.count + number}))

    // v2.0：非 react-redux 版本
    // store dispatch new action object 
    // this.props.store.dispatch(incrementAction(number))

    this.props.increment(number)
    
  }

  decrement = () =>{
    const number = this.numberRef.current.value * 1

    // v1.0: 非 redux 版本
    // this.setState(state =>({count: state.count - number}))

    // v2.0: 非 react-redux版本
    // store dispatch new action object
    // this.props.store.dispatch(decrementAction(number))

    this.props.decrement(number)
  }

  incrementIfOdd = () =>{
    const number = this.numberRef.current.value * 1

    if(this.props.count % 2 ===1){

      // v2.0: 非 react-redux版本
      // this.props.store.dispatch(incrementAction(number))

      this.props.increment(number)

    }
  }

  incrementAsync = () =>{
    const number = this.numberRef.current.value * 1

    // v3.0 非 redux-thunk 版本
    // update the state after 1 sec
    // setTimeout(()=>{

    //   // v2.0: 非react-redux版本
    //   // this.props.store.dispatch(incrementAction(number))

    //   this.props.increment(number)

    // }, 1000)

    this.props.incrementAsync(number)
  }

  render(){
    const count = this.props.count
    return(
      <div style={{padding:10}}>
        <p>click {count} times </p>
        <div >
          <select ref={this.numberRef}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select> &nbsp;&nbsp;
          <button onClick={this.increment}> + </button>&nbsp;&nbsp;
          <button onClick={this.decrement}> - </button>&nbsp;&nbsp;
          <button onClick={this.incrementIfOdd}> increment if odd </button>&nbsp;&nbsp;
          <button onClick={this.incrementAsync}> increment async </button>&nbsp;&nbsp;

        </div>
      </div>
    )
  }
}
