import style from './Footer.module.css';
import FooterItem from './FooterItem/FooterItem';
import { FOOTER_CONSTANTS } from './FooterConstants';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <ul>
                {FOOTER_CONSTANTS.map(x =>
                    <FooterItem
                        key={x.id}
                        id={x.id}
                    >
                        {x.text}
                    </FooterItem>
                )}
                <li className={style.listItem}>
                    <img src="/blue-origami-bird-flipped.png" alt="" />
                </li>
            </ul>
            <p>Software University &copy; 2019</p>
        </footer>
    );
}

export default Footer;