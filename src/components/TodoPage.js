import React from 'react';
import ReactDOM from 'react-dom';

import AddIcon from '../assets/add_circle.png';
import DeleteIcon from '../assets/delete_icon.png';

import { addTask, togglecompleted } from '../utils/listFunctions.js';

import './TodoPage.scss';

export default class TodoPage extends React.Component {

  constructor() {
    super();
    this.state = {
      task: '',
      taskList: [{
        task: "hey",
        completed: false
      }, {
        task: "hello",
        completed: true
      }]
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

  toggleState(index) {
    let taskList = togglecompleted(index, this.state.taskList);
    this.setState(taskList);
  }

  renderTaskList() {
    let { taskList } = this.state;
    return taskList.map((task, index) => (
      task.completed == false ?
        <div className="task" key={index}>
          <div className="checkbox">
              <input id={"checkboxInput" + index} type="checkbox"
                onChange={this.toggleState.bind(this, index)}
                checked={task.completed}
                value={" "}>
              </input>
              <label htmlFor={"checkboxInput"+index}></label>
          </div>
          <div className="task-name">{task["task"]}</div>
          <img src={DeleteIcon} />
        </div>
        : null
    ))
  }

  renderCompletedList() {
    let { taskList } = this.state;
    return taskList.map((task, index) => (
      task.completed == true ?
        <div className="task" key={index}>
          <div className="checkbox">
              <input id={"checkboxInput" + index} type="checkbox"
                  onChange={this.toggleState.bind(this, index)}
                  checked={task.completed}
                  value={" "}>
              </input>
              <label htmlFor={"checkboxInput"+index}></label>
          </div>
          <div className="task-name">{task["task"]}</div>
          <img src={DeleteIcon} />
        </div>
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
            onChange={this.handleChange.bind(this)}/>
        </div>
        <div className="task-list">
          { this.renderTaskList() }
        </div>
        <h1 className="completed-tasks">
          Completed
        </h1>
        <div className="task-list">
          { this.renderCompletedList() }
        </div>
      </div>
    );
  }
}
