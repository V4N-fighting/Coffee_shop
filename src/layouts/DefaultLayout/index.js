import Footer from './Footer';
import Header from './Header';
import style from './DefaultLayout.module.scss';

function DefaultLayout({ children }) {
    return (
        <div className={style.wrapper}>
            <div className={style.contain}>
                <Header />
                <div className={style.content}>{children}</div>
                <Footer />
            </div>
        </div>
    );
}

export default DefaultLayout;
