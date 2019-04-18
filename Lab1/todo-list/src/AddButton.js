import React, {Component} from 'react'

var curid = 0;

class AddButton extends Component {
    addTask() {
        if (this.props.new_task === '') return;
        document.getElementById('input').value = '';
        this.props.updateTasks();
        curid += 1;
    }

    render() {
        return (
            <button onClick = {this.addTask.bind(this)} >Add</button>
        );
    }
}

export default AddButton;
