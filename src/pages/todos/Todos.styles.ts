import styled from 'styled-components';

export const TodosStyles = {
  Container: styled.div`
    width: 100%;
    max-width: 60rem;
    background-color: ${({ theme }) => theme.colors.primaryWhite};
    border-radius: 0.8rem;
    padding: 3rem 2.5rem;
    box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.05);
  `,
  Title: styled.h1`
    font-size: 2.6rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primaryTeal};
    margin-bottom: 2rem;
  `
};
