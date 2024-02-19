import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

export interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}

const Footer = ({className, ...props}: FooterProps):JSX.Element => {
    return (
        <div>
            Footer
        </div>
    );
};

export default Footer;