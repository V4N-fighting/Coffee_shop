import images from '~/assets/images';
import Introduce from '~/Component/Introduce';
import SpecialOffer from '~/Component/SpecialOffer';
import Poster from './Poster';

function Home() {
    return (
        <div>
            <Poster />
            <Introduce
                introduceDescr="Founded in April 2017 by two young man from Yogyakarta, Couvee comes from an idea that everyone can enjoy coffee. It’s all started at a small rented building on Jalan Kaliurang. By 2019, Couvee has 5 branches, one of them located in Jakarta."
                buttonName="full story"
                imageUrl={images.story}
                reverse
                to="/story"
            />
            <Introduce
                introduceName="locations"
                introduceDescr="Couvee has 5 branches, four are located in Yogyakarta and one is located in Jakarta."
                buttonName="all locations"
                imageUrl={images.poster}
                to="/locations"
            />
            <SpecialOffer />
        </div>
    );
}

export default Home;
