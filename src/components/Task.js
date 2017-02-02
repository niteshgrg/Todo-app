import React from 'react';

import DeleteIcon from '../assets/delete_icon.png';

import './Task.scss';

export default class Task extends React.Component {

  static propTypes: {
    taskItem: React.PropTypes.object,
    toggleState: React.PropTypes.func,
    handleDeleteClick: React.PropTypes.func,
    id: React.PropTypes.number
  };

  render() {

    let task = this.props.taskItem;

    return (
      <div className="task">
        <div className="checkbox">
            <input id={"checkboxInput"+this.props.id} type="checkbox"
              onChange={this.props.toggleState.bind(this)}
              checked={task.completed}
              value={" "}>
            </input>
            <label htmlFor={"checkboxInput"+this.props.id}></label>
        </div>
        <div className="task-name">{task["task"]}</div>
        <img src={DeleteIcon} onClick={this.props.handleDeleteClick.bind(this)}/>
      </div>
    );
  }
}
