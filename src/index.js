import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import App from './containers/App'
import store from './redux/store'


/**
 *                 _oo0oo_
                  o8888888o
                  88" . "88
                  (| -_- |)
                  0\  =  /0
                ___/`---'\___
              .' \\|     |// '.
             / \\|||  :  |||// \
            / _||||| -:- |||||- \
           |   | \\\  -  /// |   |
           | \_|  ''\---/''  |_/ |
           \  .-\__  '-'  ___/-. /
         ___'. .'  /--.--\  `. .'___
      ."" '<  `.___\_<|>_/___.' >' "".
     | | :  `- \`.`\ _ /`.`/ - ` : | |
     \  \ `_.   \_ __\ /__ _/   .-` /  /
 =====`-.____`.___ \_____/___.-`___.-'=====
                   `=---='


 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
           菩提本无树   明镜亦非台
           本来无BUG   何必常修改
 */

ReactDOM.render(
  // 未使用 react-redux 时，耦合度很高
  // <React.StrictMode>
  //   <App store={store}/>
  // </React.StrictMode>,
  
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
)

// v2.0 未使用react-redux
// store.subscribe(()=>{
//   ReactDOM.render(
//     <React.StrictMode>
//       <App store={store}/>
//     </React.StrictMode>,
//     document.getElementById('root')
//   )
// })