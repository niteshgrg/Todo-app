export function addTask(task, taskList) {
  let defaultTask = { task: task, completed: false};
  taskList.unshift(defaultTask);
  window.localStorage.setItem('tasklist', JSON.stringify(taskList));
  return taskList;
}

export function togglecompleted(index, taskList) {
  taskList[index]["completed"] = !taskList[index]["completed"];
  window.localStorage.setItem('tasklist', JSON.stringify(taskList));
  return taskList;
}

export function deleteTask(index, taskList) {
  taskList.splice(index, 1);
  window.localStorage.setItem('tasklist', JSON.stringify(taskList));
  return taskList;
}

export function getTaskList() {
  if(window.localStorage.getItem('tasklist')) {
    let taskList = JSON.parse(window.localStorage.getItem('tasklist'));
    return taskList;
  } else {
    return [];
  }
}
