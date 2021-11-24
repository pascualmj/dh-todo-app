import styled from 'styled-components';

import { BaseInput } from 'components/baseInput/BaseInput';
import { BaseSelect } from 'components/baseSelect/BaseSelect';

export const AddTodoFormStyles = {
  Form: styled.form`
    display: flex;
    align-items: center;
    gap: 1rem;
  `,
  Input: styled(BaseInput)`
    flex: 1 1 auto;
  `,
  Select: styled(BaseSelect)`
    flex: 0 0 10rem;
  `
};
