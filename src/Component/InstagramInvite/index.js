import './InstagramInvite.scss';
import images from '~/assets/images';

function InstagramInvite() {
    return (
        <div className="instagram-invite">
            <div className="wrapper">
                <div className="top">
                    <div className="wrapper-top">
                        <div className="logo">
                            <img className="img" src={images.logo} alt="" />
                        </div>
                        <h1 className="slogan">FIND US ON INSTAGRAM !</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InstagramInvite;
