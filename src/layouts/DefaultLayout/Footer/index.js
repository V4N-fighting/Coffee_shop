import classNames from 'classnames';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import { publicRoute } from '~/routes';
import style from './Footer.module.scss';

import { InstagramOutlined } from '@ant-design/icons';

function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.top}>
                <div className={classNames(style.wrapperTop, 'w1024')}>
                    <div className={style.logo}>
                        <img className={style.img} src={images.logo} alt="" />
                    </div>
                    <h1 className={style.slogan}>FIND US ON INSTAGRAM !</h1>
                </div>
            </div>
            <div className={style.contain}>
                <div className={classNames(style.content, 'w1024')}>
                    <div className={style.contentItem}>
                        <div className={style.logo}>
                            <img className={style.img} src={images.logo} alt="" />
                        </div>
                    </div>
                    <div className={style.contentItem}>
                        <h3 className={style.title}>LINKS</h3>
                        <div className={style.links}>
                            {publicRoute.map((route, index) => {
                                return (
                                    <div key={index}>
                                        <Link className={style.linkItem} to={route.path}>
                                            {route.name}
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={style.contentItem}>
                        <h3 className={style.title}>CONTACTS</h3>
                        <p className={style.descr}>Hello@couvee.co.id</p>
                    </div>
                    <div className={style.contentItem}>
                        <h3 className={style.title}>SOCIALS</h3>
                        <a href="https://www.facebook.com/profile.php?id=100078347502235" className={style.descr}>
                            <InstagramOutlined className={style.socialIcon} />
                            <span>lovetea.instagram</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className={style.bottom}>
                <div className={classNames(style.wrapperBottom, 'w1024')}>
                    <span>© 2019 Couvee</span>
                    <div>
                        <span>
                            Designed and developed by{' '}
                            <a href="/" className={style.myName}>
                                Van
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
