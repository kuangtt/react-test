/*
入口JS
 */
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
/*
入口JS
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {HashRouter, Switch, Route} from 'react-router-dom'

import store from './redux/store'
import Login from './containers/login/login'
import Register from './containers/register/register'
import Main from './containers/main/main'

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route component={Main}/>
      </Switch>
    </HashRouter>
  </Provider>
), document.getElementById('root'))


// 渲染组件标签到页面
ReactDOM.render(<App/>, document.getElementById('root'))

