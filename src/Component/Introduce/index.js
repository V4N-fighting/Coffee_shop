import images from '~/assets/images';
import Button from '~/Component/Button';
import './Introduce.scss';

function Introduce({ introduceName, introduceDescr, buttonName, imageUrl, reverse, to, column, noDeco }) {
    return (
        <div className="introduce">
            <div className="wrapper">
                <div
                    className={column ? 'contain column' : 'contain'}
                    style={reverse ? { flexDirection: 'row-reverse' } : undefined}
                >
                    <div className="content">
                        <h3 className="introduce-name">{introduceName}</h3>
                        <p className="introduce-descr">{introduceDescr}</p>
                        {buttonName ? (
                            <Button primary icon to={to}>
                                {buttonName}
                            </Button>
                        ) : undefined}
                    </div>
                    <div className="image-content">
                        <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
                    </div>
                    {noDeco ? undefined : (
                        <div className="decorate-1" style={{ backgroundImage: `url(${images.gachmenxanh})` }}></div>
                    )}
                    {noDeco ? undefined : (
                        <div
                            className={reverse ? 'decorate-2 reverse' : 'decorate-2'}
                            style={{ backgroundImage: `url(${images.gachmen})` }}
                        ></div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Introduce;
