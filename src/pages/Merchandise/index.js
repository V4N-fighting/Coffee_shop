import images from '~/assets/images';
import Introduce from '~/Component/Introduce';
import Poster from '~/Component/Poster';

function Merchandise() {
    return (
        <div>
            <Poster half posterName="merchandise" img={images.merchandiseBack} />
            <Introduce
                column
                introduceDescr="Get our very first and limited edition tumbler, exclusively designed for you! We only have 100 pieces of these in stock. Go grab yours!"
                imageUrl={images.merchandiseContent}
                buttonName="order now"
                noDeco
            />
        </div>
    );
}

export default Merchandise;
