import React, { Component } from 'react';
import AddItem from './add_item';
import DisplayList from './display_list';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            todos: []
        };
    }

    addTodoItem(item){
        const { todos } = this.state;

        this.setState({
            todos: [item, ...todos]
        });
    };

    deleteItem(index){
        const { todos } = this.state;
        todos.splice(index,1);

        this.setState({
           todos
        });
    }

    render() {
        return(
            <div className="container">
                <h1>Todo List</h1>
                <AddItem handleItemAdd={ (item) => {this.addTodoItem(item)}} />
                <DisplayList todoList={this.state.todos} handleDeleteItem={ (index) => this.deleteItem(index) }/>
            </div>
        )
    }
}
export default App;
