import styled from 'styled-components';

export const LayoutDefaultStyles = {
  Container: styled.div`
    height: 100vh;
    width: 100%;
    overflow-y: auto;
    background-color: ${({ theme }) => theme.colors.primaryBeige};
    padding: 6rem 2.5rem;
    display: flex;
    flex-direction: column;
  `
};
