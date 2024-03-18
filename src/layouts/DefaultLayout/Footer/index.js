import { Link } from 'react-router-dom';
import images from '~/assets/images';
import { publicRoute } from '~/routes';

import './Footer.scss';

import { InstagramOutlined } from '@ant-design/icons';

function Footer() {
    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="contain">
                    <div className="content">
                        <div className="content-item">
                            <div className="logo">
                                <img className="img" src={images.logo} alt="" />
                            </div>
                        </div>
                        <div className="content-item">
                            <h3 className="title">LINKS</h3>
                            <div className="links">
                                {publicRoute.map((route, index) => {
                                    return (
                                        <div key={index}>
                                            <Link className="link-item" to={route.path}>
                                                {route.name}
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="content-item">
                            <h3 className="title">CONTACTS</h3>
                            <p className="descr">Hello@couvee.co.id</p>
                        </div>
                        <div className="content-item">
                            <h3 className="title">SOCIALS</h3>
                            <a href="https://www.facebook.com/profile.php?id=100078347502235" className="descr">
                                <InstagramOutlined className="social-icon" />
                                <span>lovetea.instagram</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="wrapper-bottom">
                    <span>© 2019 Couvee</span>
                    <div>
                        <span>
                            Designed and developed by{' '}
                            <a href="/" className="my-name">
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
