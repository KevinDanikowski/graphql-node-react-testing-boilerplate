import React, { Component } from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom'
import Child from './Child'
import Dashboard from './components/Dashboard'
import Settings from './components/Settings'
import $ from 'jquery'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showDropdown: false
        }
    }
    render() {
        const ToDoList = () => {
            const toDos = [
                {id: '1', task: 'get garbage', finished: false}
            ]
            return toDos.map(toDo => {
                return(
                    <div>
                        {toDo.task}
                    </div>
                )
            })
        }
        return (
            <div className="App">
                <header id='app-header' className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <button id='alert-button' onClick={()=>this.setState({showDropdown: !this.state.showDropdown})}>"this clicked!</button>
                {(this.state.showDropdown)? <div className='dropdown'>This is a dropdown</div>: null}
                <div className='alert-class'>My alert class is here...</div>
                <Child text='this is my child ;)'/>
                <div>
                    <ToDoList />
                </div>
                <Link to='/dashboard'>Dashboard Link</Link>
                <Link to='/settings'>Settings Link</Link>
                <Redirect from='/settings' to='/dashboard'/>
                <Switch>
                    <Route exact path='/Dashboard' component={()=><Dashboard/>} />
                    <Route exact path='/Settings' component={()=><Settings/>} />
                </Switch>
            </div>
        )
    }
}
console.log($('#alert-button').length)

export default App;
