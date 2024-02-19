import Link from 'next/link';
import React from 'react';
import styles from './Menu.module.css';

interface FirstLevelMenuItem {
    route: string;
    name: string;
    id: number;
}

const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: '', name: "Главная", id: 1},
    {route: 'electrozamki', name: "Электронные замки", id: 2},
    {route: 'about', name: "О нас", id: 3},
    {route: 'contacts', name: "Контакты", id: 4},
    {route: 'dostavka', name: "Доставка", id: 4},
    {route: 'oplata', name: "Оплата", id: 4},
  ];



const Menu = () => {
    return (
        <ul className={styles.menu}>
        {firstLevelMenu.map((m) => (
          <li key={m.route} className={styles.menuItem}>
            <Link href={`/${m.route}`} className={styles.menuLink}>
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