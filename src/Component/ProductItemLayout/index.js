import Button from '../Button';
import './ProductItemLayout.scss';
import { contentsForMenuItem } from '../ListLayout';
import Poster from '../Poster';
import images from '~/assets/images';

function ProductItemLayout() {
    return (
        <div>
            <Poster half posterName="Let order" img={images.orderMenu} />
            <div className="product-item-layout">
                <div className="wrapper">
                    <div className="contain">
                        <div className="products-image">
                            <div
                                className="main-img"
                                style={{ backgroundImage: `url(${contentsForMenuItem.url})` }}
                            ></div>
                            <div className="list-products"></div>
                        </div>
                        <div className="product-content">
                            <h3 className="product-name">{contentsForMenuItem.name}</h3>
                            <p className="product-descr">{contentsForMenuItem.descr}</p>
                            <p className="discount">
                                <span className="promo">{contentsForMenuItem.discount}</span>
                            </p>
                            <div className="box-price">
                                <p className="present-price">{contentsForMenuItem.presentPrice}</p>
                                <p className="pass-price">{contentsForMenuItem.passPrice}</p>
                            </div>
                            <div className="box-btn">
                                <Button primary>Order now</Button>
                                <Button outline>Add to cart</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductItemLayout;
