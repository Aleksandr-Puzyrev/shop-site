import Link from 'next/link';
import React from 'react';


interface FirstLevelMenuItem {
    route: string;
    name: string;
    id: number;
}

const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses', name: "Курсы", id: 1},
    {route: 'services', name: "Сервисы", id: 2},
    {route: 'about', name: "О нас", id: 3},
    {route: 'Products', name: "Продукты", id: 4},
  ];



const Menu = () => {
    return (
        <ul>
        {firstLevelMenu.map((m) => (
          <li key={m.route}>
            <Link href={`/${m.route}`}>
              <div>
                <span>{m.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    );
};

export default Menu;