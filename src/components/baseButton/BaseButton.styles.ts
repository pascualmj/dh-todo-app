import styled from 'styled-components';

import { TBaseButtonVariant } from 'app-types/components/baseButton';

export const BaseButtonStyles = {
  Button: styled.button<{ variant: TBaseButtonVariant }>`
    min-width: 12rem;
    height: 4rem;
    padding: 0 2rem;
    border-radius: 0.8rem;
    color: ${({ theme }) => theme.colors.primaryWhite};
    background-color: ${({ theme, variant }) =>
      variant === 'primary' ? theme.colors.primaryNavy : theme.colors.primaryTeal};
  `
};
