import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return(
            <React.Fragment>
                <h1>Hola bienvenido al chat grupal</h1>
                <Link to="/chat" className="btn btn-primary">Go to chat</Link>
            </React.Fragment>
        )
    }
}

export default Home