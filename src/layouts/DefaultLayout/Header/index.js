import { Link } from 'react-router-dom';
import './Header.scss';
import { publicRoute } from '~/routes';

import { MenuOutlined, InstagramOutlined, CloseOutlined } from '@ant-design/icons';
import images from '~/assets/images';
import { useState, useEffect } from 'react';

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [stickyHeader, setStickyHeader] = useState(true);

    const [scroll, setScroll] = useState(0);

    const handleToogle = (e) => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        window.onscroll = (e) => {
            setScroll(window.scrollY);
            if (scroll > 100) {
                setStickyHeader(false);
            } else {
                setStickyHeader(true);
            }
        };
    }, [scroll]);

    return (
        <div className={stickyHeader ? 'header' : 'header black-back'}>
            <div className="wrapper">
                <div className="contain">
                    <div className="socials">
                        <a className="socials-link icon" href="https://www.facebook.com/profile.php?id=100078347502235">
                            <InstagramOutlined />
                        </a>
                    </div>
                    <div className="logo">
                        <Link className="logoLink" to="/">
                            <img className="logo-img" src={stickyHeader ? images.logo : images.logoWhite} alt="" />
                        </Link>
                    </div>
                    <div className="toggle">
                        <button className="toggle-btn" onClick={handleToogle}>
                            <span className="icon">
                                <MenuOutlined />
                            </span>
                            {showMenu && (
                                <div className="menu">
                                    <CloseOutlined className="close-icon" />
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
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
