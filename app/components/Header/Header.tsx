import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import Menu from './Menu/Menu';
import styles from './Header.module.css';


export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}

const Header= ({className, ...props}: HeaderProps):JSX.Element => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>Logo</div>
            <Menu />
        </div>
    );
};

export default Header;