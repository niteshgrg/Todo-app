import React from 'react';

import { addTask, togglecompleted, deleteTask, getTaskList } from '../utils/listFunctions.js';

import Task from './Task.js';

import AddIcon from '../assets/add_circle.png';
import './TodoPage.scss';

export default class TodoPage extends React.Component {

  constructor() {
    super();
    this.state = {
      task: '',
      taskList: getTaskList()
    }
  }

  handleChange(e) {
    this.setState({
      task: e.target.value
    });
  }

  handleAddClick() {
    let taskList=addTask(this.state.task, this.state.taskList);
    this.setState({
      taskList: taskList,
      task: ''
    });
  }

  handleDeleteClick(index) {
    let taskList = deleteTask(index, this.state.taskList);
    this.setState(taskList);
  }

  handleKeyPress(target) {
    if(target.charCode === 13) {
      this.handleAddClick();
    }
  }

  toggleState(index) {
    let taskList = togglecompleted(index, this.state.taskList);
    this.setState(taskList);
  }

  renderTaskList(completed) {
    let { taskList } = this.state;
    return taskList.map((task, index) => (
      task.completed === completed ?
        <Task key={index} id={index}
          taskItem={task}
          toggleState={this.toggleState.bind(this, index)}
          handleDeleteClick={this.handleDeleteClick.bind(this, index)} />
        : null
    ))
  }

  render() {

    return (
      <div className="todo-page">
        <h1 className="heading">
          ToDo List
        </h1>
        <div className="add-item">
          <img src={AddIcon} onClick={this.handleAddClick.bind(this)}/>
          <input
            className="add-task"
            placeholder="Add Task"
            value={this.state.task}
            onKeyPress={this.handleKeyPress.bind(this)}
            onChange={this.handleChange.bind(this)}/>
        </div>
        <div className="task-list">
          { this.renderTaskList(false) }
        </div>
        <h1 className="completed-tasks">
          Completed
        </h1>
        <div className="task-list">
          { this.renderTaskList(true) }
        </div>
      </div>
    );
  }
}
