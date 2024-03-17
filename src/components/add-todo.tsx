import { FC, useRef, useEffect } from 'react';
import { useAddTodo } from '../hooks/use-add-todo';

export const AddTodo: FC = () => {
  const { id, saveTodo } = useAddTodo();

  return <AddTodoInput key={id} saveTodo={saveTodo} />;
};

interface AddTodoInputProps {
  saveTodo: (content: string) => void;
}

const AddTodoInput: FC<AddTodoInputProps> = ({ saveTodo }) => {
  const todoContentRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (todoContentRef.current) {
      todoContentRef.current.focus();
    }
  }, []);

  const doSaveTodo = () => {
    if (todoContentRef?.current?.value) {
      saveTodo(todoContentRef.current.value);
    }
  };

  return (
    <>
      <input ref={todoContentRef} defaultValue="" placeholder="Add a Todo" />
      <button onClick={doSaveTodo}>Add</button>
    </>
  );
};
