import React, { Component } from 'react';
import './Todo.css';
import Slider from 'react-rangeslider'
// import AddButton from './AddButton'
import SortButton from './SortButton'
import TaskList from './TaskList'
import DoneList from './DoneList'

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

class Todo extends Component {
  constructor(props) {
      super(props);
      this.state = {
          id: '',
          new_task: '',
          tasks: [],
          done: [],
          priority: 0
      }
  }

  updateNewTask() {
      const val = this.refs.addedTask.value
      this.setState({
          new_task: val
      });
  }

  addNewTask() {
      const new_task = {id: curid.toString(), content: this.state.new_task, priority: this.state.priority};
      this.setState({
          new_task: '',
          id: '',
          tasks: [...this.state.tasks, new_task]
      });
  }

  removeFromTasks(id) {
      this.setState({
          new_task: '',
          tasks: this.state.tasks.filter(
              (task) => {
                  return task.id.indexOf(id) === -1;
              }
          )
      });
  }
  removeFromDone(id) {
      this.setState({
          new_task: '',
          done: this.state.done.filter(
              (task) => {
                  return task.id.indexOf(id) === -1;
              }
          )
      });
  }

  addToDone(id) {
      const doneTask = this.state.tasks.filter((task) => { return task.id.indexOf(id) !== -1});
      //console.log(doneTask);
      this.setState({
         done: [...this.state.done, doneTask[0]]
      });
  }
  addToTasks(id) {
      const task = this.state.done.filter((task) => { return task.id.indexOf(id) !== -1});
      this.setState({
         tasks: [...this.state.tasks, task[0]]
      });
  }

  handleChange = value => {
    this.setState({
      priority: value
    })
  };

  sortTasks() {
      let list = this.state.tasks
      list.sort((a, b) => (b.priority - a.priority))

      this.setState({
          tasks: list
      });
  }

  render() {
    return (
        <div className = "Main">
            <img className = "logo" src = "https://blog.hubspot.com/hubfs/To_Do_List.png?t=1516490053410" alt = "Title" />
            <div className = "addTask">
                <input ref = "addedTask" type = "text" placeholder = "Enter your task" id = "input"
                       onChange = {this.updateNewTask.bind(this)}
                />
                <AddButton
                    new_task = {this.state.new_task}
                    updateTasks = {this.addNewTask.bind(this)}
                />
                <div className = "slider">
                    <p>Priority:</p>
                    <Slider
                        min={0}
                        max={100}
                        value = {this.state.priority}
                        onChange = {this.handleChange}
                     />
                </div>
            </div>
            <div className = "filter">
                <h3 className = "title">ToDo</h3>
                <SortButton className = "sortButton" sortTasks = {this.sortTasks.bind(this)}/>
            </div>
            <div className = "tasks">
                <TaskList
                    updateTasks = {this.removeFromTasks.bind(this)}
                    tasks = {this.state.tasks}
                    doneTask = {this.addToDone.bind(this)}
                />
            </div>
            <h3 className = "title">Done</h3>
            <div className = "tasks">
                <DoneList
                    updateTasks = {this.removeFromDone.bind(this)}
                    tasks = {this.state.done}
                    doneTask = {this.addToTasks.bind(this)}
                />
            </div>
        </div>
    );
  }
}

export default Todo;
