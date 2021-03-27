import style from './Header.module.css';
import liItemStyle from '../Header/NavigationItem/NavigationItem.module.css'
import NavigationItem from './NavigationItem/NavigationItem';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className={style.navigation}>
            <ul>
                <li className={liItemStyle.listItem}><img src="white-origami-bird.png" alt="white origami" /></li>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/"><NavigationItem>Home</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/about"><NavigationItem>About</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/contact-us"><NavigationItem>Contact Us</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/about/pesho"><NavigationItem>Going to Pesho</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/about/gosho"><NavigationItem>Going to Gosho</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/about/stamat"><NavigationItem>Going to Stamat</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/about/marinka"><NavigationItem>Going to Marinka</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/about/tosho"><NavigationItem>Going to Tosho</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/about/eva"><NavigationItem>Going to 9</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/about/sisi"><NavigationItem>Going to 10</NavigationItem></NavLink>
                <NavLink activeClassName="active-navigation-item" exact={true} to="/about/toni"><NavigationItem>Going to 11</NavigationItem></NavLink>                
            </ul>
        </nav>
    );
}

export default Header;