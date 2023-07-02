
import styles from './Navbar.module.css'
import { ActiveLink } from './ActiveLink';
import { FC } from 'react';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/abaut'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];
export const Navabar: FC = () => {
  return (
    <nav className={styles.menu}>

      {
        menuItems.map(({text,href})=>(

          <ActiveLink key={text} text={text} href={href}/>
        ))
      }
       
       {/* <ActiveLink text="Home" href="/"/>
       <ActiveLink text="About" href="/abaut"/>
       <ActiveLink text="Contact" href="/contact"/> */}
    </nav>
    
  );
};
