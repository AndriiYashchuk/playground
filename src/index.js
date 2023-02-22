import TodoList from './tasks/todoList';

const config = {
  header: ['id', 'name'],
  data: [
    {id: '1', name: 'test', isDone: false}
  ]
}

document.addEventListener('DOMContentLoaded', () => {
  const todoList = new TodoList(config);
  todoList.init();
})
