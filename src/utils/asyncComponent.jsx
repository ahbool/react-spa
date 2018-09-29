import React, { Component } from "react"

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props)

      this.state = {
        component: null
      }
    }

    componentDidMount() {
      importComponent().then((p) => {
          this.setState({component: p.default})
      })
    }

    render() {
      const C = this.state.component

      return C ? <C {...this.props} /> : <p>Loading</p>
    }
  }

  return AsyncComponent
}
