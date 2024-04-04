import { Link } from 'react-router-dom';
import Button from '~/Component/Button';
import SliderMenu from '../SliderMenu';
import './ListLayout.scss';

export let contentsForMenuItem = {
    url: '',
    name: '',
    descr: '',
    discount: '',
    presentPrice: '',
    passPrice: '',
};

function ListLayout({
    title,
    contents,
    btnTextPrimary,
    btnTextOutline,
    onlyPicture,
    to,
    toForOutlineBtn,
    slide,
    hasBtn = true,
}) {
    const handleClick = (content) => {
        contentsForMenuItem.url = content.img;
        contentsForMenuItem.name = content.name;
        contentsForMenuItem.descr = 'Happy happy happy';
        contentsForMenuItem.discount = 'Giảm 20%';
        contentsForMenuItem.presentPrice = '100.000';
        contentsForMenuItem.passPrice = '125.000';

        console.log(contentsForMenuItem);
    };
    return (
        <div className="list-layout">
            <div className="wrapper">
                {title ? <h1 className="title">{title}</h1> : undefined}
                {slide ? (
                    <SliderMenu contents={contents} marginBottom="10px">
                        {(content) => {
                            return (
                                <div className="item" style={{ margin: '10px' }}>
                                    <Link
                                        to="/menuitem"
                                        className="image"
                                        style={{ backgroundImage: `url(${content.img})` }}
                                        onClick={(e) => {
                                            handleClick(content);
                                        }}
                                    >
                                        {onlyPicture ? undefined : (
                                            <div className="show-descr">
                                                <h4 className="descr">+ see description</h4>
                                            </div>
                                        )}
                                    </Link>
                                    {onlyPicture ? undefined : (
                                        <div className="item-name">
                                            <h4 className="name">{content.name}</h4>
                                        </div>
                                    )}
                                </div>
                            );
                        }}
                    </SliderMenu>
                ) : (
                    <div className="content">
                        {contents.map((content, index) => {
                            return (
                                <div key={index} className={onlyPicture ? `item wavy-${index}` : 'item'}>
                                    <Link
                                        to="/menuitem"
                                        className="image"
                                        style={{ backgroundImage: `url(${content.img})` }}
                                        onClick={(e) => {
                                            handleClick(content);
                                        }}
                                    >
                                        {onlyPicture ? undefined : (
                                            <div className="show-descr">
                                                <h4 className="descr">+ see description</h4>
                                            </div>
                                        )}
                                    </Link>
                                    {onlyPicture ? undefined : (
                                        <div className="item-name">
                                            <h4 className="name">{content.name}</h4>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}

                {hasBtn &&
                    (onlyPicture ? (
                        <div className="btn-box">
                            <Button primary to={to}>
                                {btnTextPrimary}
                            </Button>
                            <Button outline to={toForOutlineBtn}>
                                {btnTextOutline}
                            </Button>
                        </div>
                    ) : (
                        <div className="btn-box">
                            <Button primary to={to}>
                                {btnTextPrimary}
                            </Button>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default ListLayout;
