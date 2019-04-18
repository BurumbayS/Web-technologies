import React, { Component } from 'react';

class SortButton extends Component {
    sortTasks() {
        this.props.sortTasks();
    }

    render() {
        return (
            <button onClick = {this.sortTasks.bind(this)}> Sort </button>
        );
    }
}

export default SortButton;
