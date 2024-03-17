import { FC } from 'react';
import { TodoFilters } from './todo-filters';
import { AddTodo } from './add-todo';
import { TodoList } from './todo-list';

export const TodoApp: FC = () => (
  <div>
    <TodoFilters />
    <AddTodo />
    <TodoList />
  </div>
);
