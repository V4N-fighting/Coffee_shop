import './CardOffer.scss';
import { RightOutlined } from '@ant-design/icons';
import images from '~/assets/images';

function CardOffer({ title, descr, time, detailText, image }) {
    return (
        <div className="card-offer">
            <div className="contain">
                <div className="image" style={{ backgroundImage: `url(${image})` }}>
                    <h6 className="label" style={{ backgroundImage: `url(${images.offerCard})` }}>
                        Promo !
                    </h6>
                </div>
                <div className="content">
                    <h4 className="title">{title}</h4>
                    <p className="descr">{descr}</p>
                    <div className="details">
                        <p className="time">{time}</p>
                        <a className="more-detail">
                            <span className="detail-text">{detailText}</span>
                            <RightOutlined className="detail-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardOffer;
