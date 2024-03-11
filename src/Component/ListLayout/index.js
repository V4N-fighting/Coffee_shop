import Button from '~/Component/Button';
import './ListLayout.scss';

function ListLayout({ title, contents, btnTextPrimary, btnTextOutline, onlyPicture, to, toForOutlineBtn }) {
    return (
        <div className="list-layout">
            <div className="wrapper">
                <h1 className="title">{title}</h1>
                <div className="content">
                    {contents.map((content, index) => {
                        return (
                            <div key={index} className={onlyPicture ? `item wavy-${index}` : 'item'}>
                                <div className="image" style={{ backgroundImage: `url(${content.img})` }}>
                                    {onlyPicture ? undefined : (
                                        <div className="show-descr">
                                            <h4 className="descr">+ see description</h4>
                                        </div>
                                    )}
                                </div>
                                {onlyPicture ? undefined : (
                                    <div className="item-name">
                                        <h4 className="name">{content.name}</h4>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {onlyPicture ? (
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
                )}
            </div>
        </div>
    );
}

export default ListLayout;
