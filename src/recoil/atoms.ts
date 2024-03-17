import { atom } from 'recoil';
import { Todo } from '../types/types';
import { Filter } from '../types/enums';

export const todoListState = atom<Todo[]>({
  key: 'todoListStateAtom',
  default: [],
});

export const todoFilterState = atom({
  key: 'todoFilterState',
  default: Filter.ALL,
});
