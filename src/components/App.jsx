import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './Layout';
import Chat from '../pages/Chat'
import Home from '../pages/Home';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/chat" component={Chat} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        )
    }
}

export default App