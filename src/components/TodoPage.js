import React from 'react';
import ReactDOM from 'react-dom';

import AddIcon from '../assets/add_circle.png';

import './TodoPage.scss';

export default class TodoPage extends React.Component {

  render() {


    return (
      <div className="todo-page">
        <img src={AddIcon} />
      </div>
    );
  }
}
