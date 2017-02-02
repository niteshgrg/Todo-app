export function addTask(task, taskList) {
  let defaultTask = { task: task, completed: false};
  taskList.unshift(defaultTask);
  return taskList;
}

export function togglecompleted(index, taskList) {
  taskList[index]["completed"] = !taskList[index]["completed"];
  return taskList;
}

export function deleteTask(index, taskList) {
  delete taskList[index];
  return taskList;
}
