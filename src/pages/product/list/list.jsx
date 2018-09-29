import React from 'react'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

@inject('productStore')
@observer
class List extends React.Component {
  componentDidMount(){
      this.props.productStore.getList()
  }

  render(){
    return (
      <div>
          <p>product/list</p>
          <p>mobx-store中取值：{ this.props.productStore.title }</p>
          <Link to="/">首页</Link>
          <Link to="/product/detail.html">产品详情</Link>
      </div>
    )
  }
}

export default List
