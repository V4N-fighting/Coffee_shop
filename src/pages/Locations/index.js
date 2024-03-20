import { useState } from 'react';
import images from '~/assets/images';
import Introduce from '~/Component/Introduce';
import Poster from '~/Component/Poster';
import LocationCard from './LocationCard';

import './Locations.scss';
function Locations() {
    const locationsContent = [
        {
            name: 'Jl Seturan, Yogyakarta',
            detail: 'Jl. Seturan Raya No.88, Kledokan, Caturtunggal, Kec. Depok, Kabupaten Sleman, Yogyakarta',
            operationTime: 'Opens at 09.00 AM - 12.00 AM',
            image: images.location1,
            localName: 'Yogyakarta',
        },
        {
            name: 'Jl Kaliurang, Yogyakarta',
            detail: 'Jalan Kaliurang Km 5.2, Manggung, Caturtunggal, Depok, Sleman, DIY 55281',
            operationTime: 'Opens at 08.00 AM - 12.00 AM',
            image: images.location2,
            localName: 'Yogyakarta',
        },
        {
            name: 'Jl Ahmad Dahlan, Yogyakarta',
            detail: 'Jl. KH. Ahmad Dahlan No.98, Notoprajan, Ngampilan, Yogyakarta',
            operationTime: 'Opens at 09.00 AM - 12.00 AM',
            image: images.location3,
            localName: 'Yogyakarta',
        },
        {
            name: 'Jl Tanjung Duren, Jakarta',
            detail: 'Ruko Sentra Bisnis, Jl. Tanjung Duren Raya No.7, RT.12/RW.2, Tj. Duren Utara, Kec. Grogol petamburan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470',
            operationTime: 'Opens at 09.00 AM - 10.00 PM',
            image: images.location4,
            localName: 'Jakarta',
        },
    ];

    const listLocal = ['all', 'Yogyakarta', 'Jakarta'];

    const [locations, setLocations] = useState(locationsContent);

    const handleClick = (localName) => {
        let listLocations = locationsContent.filter((local) => {
            return local.localName === localName;
        });

        if (localName === 'all') {
            listLocations = locationsContent;
        }

        setLocations(listLocations);
    };

    return (
        <div className="locations">
            <Poster half posterName="location" img={images.locationImg} />
            <Introduce
                imageUrl={images.locations}
                buttonName="all locations"
                introduceDescr="You can found us in Yogyakarta and Jakarta. Every store has their own unique ambience, let’s click All Locations below to know which one is gonna be your favorite!"
            />
            <div className="content">
                <h3 className="title">locations</h3>
                <div className="list-type">
                    {listLocal.map((name, index) => {
                        return (
                            <span
                                key={index}
                                className="type"
                                onClick={(e) => {
                                    handleClick(name);
                                }}
                            >
                                {name}
                            </span>
                        );
                    })}
                </div>
            </div>
            <div className="wrapper-content">
                {locations.map((location, index) => {
                    return (
                        <LocationCard
                            key={index}
                            image={location.image}
                            title={location.name}
                            descr={location.detail}
                            time={location.operationTime}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Locations;
