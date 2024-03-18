import ListLayout from '~/Component/ListLayout';
import Poster from '~/Component/Poster';
import images from '~/assets/images';
import './Menu.scss';
import { useEffect, useState } from 'react';

function Menu() {
    const contentProducts = [
        {
            name: 'Black Cookie Latte',
            img: images.product1,
            type: 'basic',
        },
        {
            name: 'Red Velvet Latte',
            img: images.product2,
            type: 'signature',
        },
        {
            name: 'Matcha Latte',
            img: images.product3,
            type: 'flavored coffee',
        },
        {
            name: 'Black Cookie Latte',
            img: images.product1,
            type: 'basic',
        },
        {
            name: 'Red Velvet Latte',
            img: images.product2,
            type: 'basic',
        },
        {
            name: 'Matcha Latte',
            img: images.product3,
            type: 'non-coffee',
        },
        {
            name: 'Matcha Latte',
            img: images.product3,
            type: 'basic',
        },
    ];

    const listType = ['all', 'basic', 'signature', 'flavored coffee', 'non-coffee'];

    const [products, setProducts] = useState(contentProducts);

    const handleClick = (type) => {
        let listProduct = contentProducts.filter((product) => {
            return product.type === type;
        });

        if (type === 'all') {
            listProduct = contentProducts;
        }

        setProducts(listProduct);
    };

    return (
        <div className="Menu">
            <Poster half posterName="menu" img={images.menuBack} />
            <div className="content">
                <h3 className="title">products</h3>
                <div className="list-type">
                    {listType.map((type, index) => {
                        return (
                            <span
                                key={index}
                                className="type"
                                onClick={(e) => {
                                    handleClick(type);
                                }}
                            >
                                {type}
                            </span>
                        );
                    })}
                </div>
            </div>
            <ListLayout contents={products} hasBtn={false} />
        </div>
    );
}

export default Menu;
