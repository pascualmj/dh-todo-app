import styled from 'styled-components';

import { ReactComponent as ArrowIcon } from 'assets/icons/arrow.svg';

export const ToggleOrderStyles = {
  Container: styled.div`
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 1rem;
  `,
  Icon: styled(ArrowIcon)`
    margin-right: 0.4rem;
    width: 2rem;
    height: 2rem;
  `,
  Text: styled.span`
    color: ${({ theme }) => theme.colors.primaryNavy};
    position: relative;
    top: 0.1rem;
  `
};
