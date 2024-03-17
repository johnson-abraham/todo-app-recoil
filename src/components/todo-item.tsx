import { FC } from 'react';
import { Todo } from '../types/types';
import { useToggleTodoCompleted } from '../hooks/use-toggle-todo-completed';

interface TodoItemProps {
  item: Todo;
}

export const TodoItem: FC<TodoItemProps> = ({ item }) => {
  const { toggleTodoCompleted } = useToggleTodoCompleted(item.id);

  return (
    <p
      onClick={toggleTodoCompleted}
      style={{
        textDecoration: item.isCompleted ? 'line-through' : 'none',
        cursor: 'pointer',
      }}
    >
      {item.content}
    </p>
  );
};
