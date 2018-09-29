import React from 'react'

class NotFound extends React.Component{

    render(){
        return (
            <div>
                <h1>404</h1>
                <p> No match for <code>{location.pathname}</code></p>
            </div>
        )
    }

}

export default NotFound
