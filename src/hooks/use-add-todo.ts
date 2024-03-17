import { useCallback, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../recoil/atoms';

interface UseAddTodoResult {
  id: string;
  saveTodo: (content: string) => void;
}

export const useAddTodo = (): UseAddTodoResult => {
  const addTodoToState = useSetRecoilState(todoListState);
  const [id, setId] = useState(Math.random().toString());

  const saveTodo = useCallback(
    (content: string) => {
      addTodoToState((prevState) => [
        ...prevState,
        { id, content, isCompleted: false },
      ]);

      setId(Math.random().toString());
    },
    [addTodoToState, id],
  );

  return { id, saveTodo };
};
