import { selector } from 'recoil';
import { todoFilterState, todoListState } from './atoms';
import { Filter } from '../types/enums';

export const filteredTodos = selector({
  key: 'filteredTodosSelector',
  get: ({ get }) => {
    const todos = get(todoListState);
    const filter = get(todoFilterState);

    if (filter === Filter.INCOMPLETE) {
      return todos.filter((todo) => !todo.isCompleted);
    } else if (filter === Filter.COMPLETED) {
      return todos.filter((todo) => todo.isCompleted);
    }
    return todos;
  },
});
