import React, {Component} from 'react'
import ListItem from './ListItem'

class TaskList extends Component {
    render() {
        const list = this.props.tasks;
        //console.log(list);

        var items = list.map((task) => {
          return <ListItem key = { task.id }
            task = { task }
            updateTasks = {this.props.updateTasks.bind(this)}
            doneTask = {this.props.doneTask.bind(this)}
            doneButton = "Done"
          />
        });
        return <div > {items} < /div>
    }
}

export default TaskList;
