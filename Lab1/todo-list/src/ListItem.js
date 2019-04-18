import React, {Component} from 'react'

class ListItem extends Component {
    removeTask() {
        const id = this.props.task.id
        this.props.updateTasks(id);
    }

    doTask() {
        const id = this.props.task.id;
        this.props.doneTask(id);
        this.props.updateTasks(id);
    }

    editTask() {
        document.getElementById('input').value = this.props.task.content;
        document.getElementById('input').focus();
        this.removeTask()
    }

    render() {
        return (
            <div className = "task">
                <p>{this.props.task.content}</p>
                <button onClick = {this.editTask.bind(this)}> Edit </button>
                <button onClick = {this.removeTask.bind(this)}> Remove </button>
                <button onClick = {this.doTask.bind(this)} >{this.props.doneButton}</button>
                <p className = "subTitle"> Priority: {this.props.task.priority} </p>
            </div>
        );
    }
}

export default ListItem;
