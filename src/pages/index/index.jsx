import './style.css'

import React from 'react'
import { Link } from 'react-router-dom'
import api from '@/api'
import { observer, inject } from 'mobx-react'
import Loading from '@/components/loading'
import Banner from './banner'

@inject('userStore', 'productStore')
@observer
class Index extends React.Component {
  state = {
      title: '测试页面...',
      apiMsg: ''
  }

  onLogin(a, b){
      api.user.login({
        aaa: a,
        bbb: b
      }).then((res)=>{
          this.setState({apiMsg: res.msg})
      })
  }

  onGetProductList(){
      this.props.productStore.getList()

      console.log(this.props.productStore.list)
  }

  render(){
    let imgBB = require('@/assets/img/bb.png')

    return (
      <div className="home-div">
          <h2>{this.state.title}</h2>

          <h3>子组件</h3>
          <Loading />
          <Banner num="123" />

          <h3>图片&背景图</h3>
          <img src={imgBB} />
          <div className="imgBox"></div>

          <h3>单页跳转</h3>
          <Link to="/user/login.html">登录</Link>
          <Link to="/user/register.html">注册</Link>
          <Link to="/product/list.html">产品列表</Link>

          <h3>直接请求接口</h3>
          <button onClick={this.onLogin.bind(this, 111, 222)}>请求接口</button>
          <span>{this.state.apiMsg}</span>

          <h3>mobx</h3>
          <button onClick={this.onGetProductList.bind(this)}>mobx请求接口</button>
          <span>{ this.props.productStore.list }</span>

          <p>mobx取值userStore：{ this.props.userStore.title }</p>
          <p>mobx取值productStore：{ this.props.productStore.title }</p>
      </div>
    )
  }
}

export default Index
