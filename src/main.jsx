import '@/assets/style/common.css'

import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'mobx-react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import NotFound from "@/pages/404/404"
import routes from '@/router'
import stores from '@/store'

const supportsHistory = 'pushState' in window.history

class App extends React.Component{
  render(){
    return (
      <Provider {...stores}>
          <BrowserRouter forceRefresh={!supportsHistory}>
              <Switch>
                  <Redirect from="/index.html" to="/" />
                  {
                    routes.map((prop, key)=>{
                        return <Route path={prop.path} exact={prop.exact || false} component={prop.component} key={key} />
                    })
                  }
                  <Route component={NotFound} />
              </Switch>
          </BrowserRouter>
      </Provider>
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById("app")
)
