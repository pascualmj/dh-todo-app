import React from 'react';

import { ITodo } from 'app-types/models';
import { BaseTodoItemStyles as S } from './BaseTodoItem.styles';

export const BaseTodoItem: React.FC<
  {
    onDelete?: () => void;
    onToggle?: () => void;
  } & Omit<ITodo, 'id'>
> = ({ title, priority, done, onToggle, onDelete }) => {
  const priorityLabel = priority === '2' ? 'High' : 'Low';

  return (
    <S.Container>
      <S.Toggler done={done} onClick={onToggle} />
      <S.Title done={done}>{title}</S.Title>
      <S.Priority title={`${priorityLabel} priority`} priority={priority}>
        {priorityLabel.charAt(0)}
      </S.Priority>
      <S.DeleteIcon onClick={onDelete} />
    </S.Container>
  );
};
