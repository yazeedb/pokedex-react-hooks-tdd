import React from 'react';
import { colors } from '../colors';

type HeaderProps = {
  title: string;
};

const Header: React.FunctionComponent<HeaderProps> = ({ title }) => (
  <header
    style={{
      backgroundColor: colors.primary,
      color: colors.text,
      padding: '20px 0',
      textAlign: 'center',
      fontSize: '1.5em'
    }}
  >
    {title}
  </header>
);

export default Header;
