import images from '~/assets/images';
import CardOffer from './CardOffer';
import './SpecialOffer.scss';

function SpecialOffer() {
    return (
        <div className="special-offer" style={{ backgroundImage: `url(${images.gachnen})` }}>
            <div className="wrapper">
                <div className="contain">
                    <CardOffer
                        image={images.milkTea1}
                        title="Buy 1 Large, Get FREE 1 Reguler"
                        descr="Dapatkan gratis 1 cup regular dengan membeli 1 cup large size varian apa saja."
                        time="1 Juli - 30 Juli 2019"
                        detailText="Baca Detail"
                    />
                    <CardOffer
                        image={images.milkTea2}
                        title="Buy 2 Large, Get FREE 1 Reguler"
                        descr="Dapatkan gratis 1 cup regular dengan membeli 2 cup large size varian apa saja."
                        time="1 Juli - 30 Juli 2019"
                        detailText="Baca Detail"
                    />
                </div>
            </div>
        </div>
    );
}

export default SpecialOffer;
