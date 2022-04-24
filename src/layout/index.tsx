import React, { ReactNode } from 'react';
import classes from './style.module.scss';

interface IProps {
  children?: ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className={classes.container}>
      <div className={classes.blur_bg}>{children}</div>
    </div>
  );
};

export default Layout;
