import React from 'react'
import { Link } from 'react-router-dom'
import { inject } from 'mobx-react'

@inject( 'userStore' )
class Login extends React.Component {
  render(){
    return (
      <div>
          <p>user/login</p>
          <p>mobx-store中取值：{ this.props.userStore.title }</p>
          <Link to="/">首页</Link>
          <Link to="/user/register.html">注册</Link>
      </div>
    )
  }
}

export default Login
