import styled from 'styled-components';

export const BaseSelectStyles = {
  Select: styled.select`
    height: 4rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.secondaryBeige};
    border-radius: 0.8rem;
    padding: 0 1rem;
    background-color: ${({ theme }) => theme.colors.primaryWhite};
    color: ${({ theme }) => theme.colors.primaryNavy};
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.secondaryBeige};
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.primaryNavy};
    }
  `
};
