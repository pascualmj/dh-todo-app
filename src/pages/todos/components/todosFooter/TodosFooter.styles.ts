import { BaseButton } from 'components/baseButton/BaseButton';
import styled from 'styled-components';

export const TodosFooterStyles = {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border-top: 0.1rem solid ${({ theme }) => theme.colors.primaryNavy}; */
    padding-top: 1.5rem;
  `,
  Text: styled.p`
    flex: 1 1 auto;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.primaryNavy};
    padding-right: 1.5rem;
  `,
  ClearButton: styled(BaseButton)`
    flex: 0 0 auto;
    height: 3rem;
  `
};
