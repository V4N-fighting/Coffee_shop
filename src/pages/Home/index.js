import images from '~/assets/images';
import Introduce from '~/Component/Introduce';
import ListLayout from '~/Component/ListLayout';
import SpecialOffer from '~/Component/SpecialOffer';
import Poster from '~/Component/Poster';
import InstagramInvite from '~/Component/InstagramInvite';

function Home() {
    const contentProducts = [
        {
            name: 'Black Cookie Latte',
            img: images.product1,
        },
        {
            name: 'Red Velvet Latte',
            img: images.product2,
        },
        {
            name: 'Matcha Latte',
            img: images.product3,
        },
        {
            name: 'Black Cookie Latte',
            img: images.product1,
        },
        {
            name: 'Red Velvet Latte',
            img: images.product2,
        },
        {
            name: 'Matcha Latte',
            img: images.product3,
        },
    ];

    const contentMerchandise = [
        {
            img: images.merchandise1,
        },
        {
            img: images.merchandise2,
        },
        {
            img: images.merchandise3,
        },
    ];

    return (
        <div>
            <Poster img={images.poster} full posterName="lovetea" />
            <Introduce
                introduceDescr="Founded in April 2017 by two young man from Yogyakarta, Couvee comes from an idea that everyone can enjoy coffee. It’s all started at a small rented building on Jalan Kaliurang. By 2019, Couvee has 5 branches, one of them located in Jakarta."
                buttonName="full story"
                imageUrl={images.story}
                reverse
                to="/story"
            />

            <ListLayout slide to="/menu" contents={contentProducts} title="Products" btnTextPrimary="all menu" />
            <Introduce
                introduceName="locations"
                introduceDescr="Couvee has 5 branches, four are located in Yogyakarta and one is located in Jakarta."
                buttonName="all locations"
                imageUrl={images.poster}
                to="/locations"
            />
            <ListLayout
                toForOutlineBtn="/merchandise"
                onlyPicture
                contents={contentMerchandise}
                title="Merchandise"
                btnTextPrimary="order now"
                btnTextOutline="all item"
            />
            <SpecialOffer />
            <InstagramInvite />
        </div>
    );
}

export default Home;
