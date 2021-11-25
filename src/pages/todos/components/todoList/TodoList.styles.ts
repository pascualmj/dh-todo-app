import styled from 'styled-components';

export const TodoListStyles = {
  Container: styled.div`
    padding: 2rem 0;
    min-height: 40rem;
  `,
  EmptyStateText: styled.p`
    color: ${({ theme }) => theme.colors.primaryTeal};
    font-size: 1.6rem;
    text-align: center;
    margin-top: 2rem;
  `
};
