import style from './FooterItem.module.css';

const FooterItem = ({children}) => {
    return (
        <li className={style.listItem}>
            <a href="#">{children}</a>
        </li>
    );
}

export default FooterItem;