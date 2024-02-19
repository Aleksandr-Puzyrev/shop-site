import React, { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

export interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}

const Sidebar = ({className, ...props}: SidebarProps):JSX.Element => {
    return (
        <div>
            Sidebar
        </div>
    );
};

export default Sidebar;