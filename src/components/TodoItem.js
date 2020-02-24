import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class TodoItem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.todo.title}</p>
            </div>
        )
    }
}
   // proptypes
   TodoItem.protoTypes={
    todo: PropTypes.array.isRequired
}

export default TodoItem
