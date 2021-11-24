import React from 'react';

import { LayoutDefaultStyles as S } from './layoutDefault.styles';

export const LayoutDefault: React.FC = ({ children }) => <S.Container>{children}</S.Container>;
