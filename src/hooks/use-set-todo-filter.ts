import { Filter } from '../types/enums';
import { useSetRecoilState } from 'recoil';
import { todoFilterState } from '../recoil/atoms';
import { useCallback } from 'react';

interface UseSetTodoFilterResult {
  setFilter: (filter: Filter) => void;
}

export const useSetTodoFilter = (): UseSetTodoFilterResult => {
  const setTodoFilter = useSetRecoilState(todoFilterState);

  const setFilter = useCallback(
    (filter: Filter) => {
      setTodoFilter(filter);
    },
    [setTodoFilter],
  );

  return { setFilter };
};
