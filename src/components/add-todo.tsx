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
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const doSaveTodo = () => {
    if (inputRef?.current?.value) {
      saveTodo(inputRef.current.value);
    }
  };

  return (
    <>
      <input ref={inputRef} defaultValue="" placeholder="Add a Todo" />
      <button onClick={doSaveTodo}>Add</button>
    </>
  );
};
