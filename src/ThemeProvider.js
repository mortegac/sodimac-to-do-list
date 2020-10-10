import React from 'react';
import GlobalContext from './context';


class ThemeProvider extends React.Component {

    constructor(){
        super();
        this.state ={
            todos:[
                { task: 'tarea 1', user: 'manu' },
                { task: 'tarea 2', user: 'manu' },
                { task: 'tarea 3', user: '' },
                { task: 'tarea 4', user: '' },
                { task: 'tarea 5', user: '' },
                { task: 'tarea 6', user: '' },
                { task: 'tarea 7', user: '' },
            ],

            addTask: (title)=> this.setState({ todos: this.state.todos.concat(title)}) ,
            removeTask: (taskId)=> this.setState({ todos: this.state.todos.filter( item => item !== this.state.todos[taskId] )}),
        }
    }

    render(){

        return(

            <GlobalContext.Provider value={this.state}>
                {this.props.children}
            </GlobalContext.Provider>
        )
    }
}



export default ThemeProvider;