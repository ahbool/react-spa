import React from 'react'
import { Link } from 'react-router-dom'

class Register extends React.Component {
  render(){
    return (
      <div className="home-div">
          <p>user/register</p>
          <Link to="/">首页</Link>
          <Link to="/user/login.html">登陆</Link>
      </div>
    )
  }
}

export default Register
