import React from 'react';
import styled from 'styled-components';

import { HeaderProps } from '../../global';

const StyledHeader = styled.h1`
  color: #ff00eb4f;
  text-shadow: 2px 2px 0 #00ffb896;
`;

const Header: React.FC<HeaderProps> = ({ title }) => <StyledHeader>{title}</StyledHeader>;

export default Header;
