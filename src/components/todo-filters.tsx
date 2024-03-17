import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { todoFilterState } from '../recoil/atoms';
import { Filter } from '../types/enums';
import { useSetTodoFilter } from '../hooks/use-set-todo-filter';

export const TodoFilters: FC = () => {
  const { setFilter } = useSetTodoFilter();
  const filter = useRecoilValue(todoFilterState);

  return (
    <>
      <p
        style={{
          textDecoration: filter === Filter.ALL ? 'underline' : 'none',
          cursor: 'pointer',
        }}
        onClick={() => setFilter(Filter.ALL)}
      >
        All
      </p>
      <p
        style={{
          textDecoration: filter === Filter.INCOMPLETE ? 'underline' : 'none',
          cursor: 'pointer',
        }}
        onClick={() => setFilter(Filter.INCOMPLETE)}
      >
        Incomplete
      </p>
      <p
        style={{
          textDecoration: filter === Filter.COMPLETED ? 'underline' : 'none',
          cursor: 'pointer',
        }}
        onClick={() => setFilter(Filter.COMPLETED)}
      >
        Completed
      </p>
    </>
  );
};
