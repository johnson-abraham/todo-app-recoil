import { useSetRecoilState } from 'recoil';
import { useCallback } from 'react';
import { todoListState } from '../recoil/atoms';

interface UseToggleTodoCompletedResult {
  toggleTodoCompleted: () => void;
}

export const useToggleTodoCompleted = (
  id: string,
): UseToggleTodoCompletedResult => {
  const setTodos = useSetRecoilState(todoListState);

  const toggleTodoCompleted = useCallback(() => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        } else {
          return todo;
        }
      }),
    );
  }, [id, setTodos]);

  return { toggleTodoCompleted };
};
