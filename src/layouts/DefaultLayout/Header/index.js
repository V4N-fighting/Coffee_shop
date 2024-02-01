import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import classNames from 'classnames';

import { MenuOutlined, InstagramOutlined } from '@ant-design/icons';
import images from '~/assets/images';

function Header() {
    return (
        <div className={style.header}>
            <div className={style.wrapper}>
                <div className={classNames(style.contain, 'w1024')}>
                    <div className={style.socials}>
                        <a
                            className={(style.socialsLink, style.icon)}
                            href="https://www.facebook.com/profile.php?id=100078347502235"
                        >
                            <InstagramOutlined />
                        </a>
                    </div>
                    <div className={style.logo}>
                        <Link className={style.logoLink} to="/">
                            <img className={style.logoImg} src={images.logo} alt="" />
                        </Link>
                    </div>
                    <div className={style.toggler}>
                        <button className={style.togglerBtn}>
                            <span className={style.icon}>
                                <MenuOutlined />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
