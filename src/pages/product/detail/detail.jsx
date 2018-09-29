import React from 'react'
import { Link } from 'react-router-dom'

class Detail extends React.Component{
  render(){
    return (
        <div>
          <p>product/detail.html</p>
          <Link to="/">首页</Link>
          <Link to="/product/list.html">产品列表</Link>
        </div>
    )
  }
}

export default Detail
