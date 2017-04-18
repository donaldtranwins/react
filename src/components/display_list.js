import React from 'react';

class DisplayList extends React.Component {
    constructor(props){
        super(props);
    }

    componentWillReceiveProps(nextProps){
        this.listItems = nextProps.todoList.map((item, index) => {
            return (
                <li key={index} className="list-group-item">
                    <div className="col-sm-10">{item}</div>
                    <button onClick={ () => nextProps.handleDeleteItem(index) } className="btn btn-outline-danger col-sm-2">Delete</button>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <h2>List of Todos</h2>
                <ul className="list-group">
                    {this.listItems}
                </ul>
            </div>
        )
    }
}


export default DisplayList;