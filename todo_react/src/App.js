import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home'
import Todo from './components/Todo'
import TodoDetail from './components/TodoDetail'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/todo" component={Todo} />
                    <Route path="/todo/:id" component={TodoDetail} />
                </div>
            </Router>
        )
    }
}

export default App
