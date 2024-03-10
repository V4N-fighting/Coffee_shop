import images from '~/assets/images';
import Introduce from '~/Component/Introduce';
import Poster from './Poster';

function Home() {
    return (
        <div>
            <Poster />
            <Introduce
                introduceName="locations"
                introduceDescr="Couvee has 5 branches, four are located in Yogyakarta and one is located in Jakarta."
                buttonName="all locations"
                imageUrl={images.poster}
            />
        </div>
    );
}

export default Home;
