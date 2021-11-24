import styled from 'styled-components';

import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { TTodoPriority } from 'app-types/models';

export const BaseTodoItemStyles = {
  Container: styled.article`
    display: flex;
    align-items: center;
    padding: 1.2rem 0.5rem;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.primaryBeige};
  `,
  Toggler: styled.span<{ done?: boolean }>`
    display: block;
    flex: 0 0 2rem;
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    border: 0.2rem solid ${({ theme }) => theme.colors.primaryNavy};
    position: relative;
    cursor: pointer;

    &::before {
      content: '';
      display: ${({ done }) => (done ? 'block' : 'none')};
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 0.6rem;
      background-color: ${({ theme }) => theme.colors.primaryNavy};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `,
  Title: styled.p<{ done?: boolean }>`
    flex: 1 1 auto;
    color: ${({ theme }) => theme.colors.primaryNavy};
    padding: 0 1rem;
    text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
  `,
  Priority: styled.span<{ priority?: TTodoPriority }>`
    flex: 0 0 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.3rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primaryWhite};
    background-color: ${({ theme, priority }) =>
      priority === '2' ? theme.colors.primaryError : theme.colors.primarySuccess};
    margin-right: 0.8rem;
  `,
  DeleteIcon: styled(CloseIcon)`
    flex: 0 0 1.8rem;
    width: 1.8rem;
    height: 1.8rem;
    cursor: pointer;
  `
};
