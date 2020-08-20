import React from 'react';
import styled from 'styled-components';

import { HeaderProps } from "../../global";

const StyledHeader = styled.h1`
  text-decoration: underline;
`;

const Header: React.FC<HeaderProps> = ({ title }) => <StyledHeader>{title}</StyledHeader>;

export default Header;
