import { useRef, useState } from 'react';
import images from '~/assets/images';
import './Poster.scss';

function Poster({ full, half, img, posterName }) {
    const title = useRef();
    const leftHand = useRef();
    const rightHand = useRef();
    const [clientX, setClientX] = useState(0);
    const [clientY, setClientY] = useState(0);

    const handleMouseMove = (e) => {
        setClientX((e.clientX - 600) / 100 + 40);
        setClientY((e.clientX - 300) / 100 + 20);
        leftHand.current.setAttribute('style', `transform: translate(${clientX}px, -${clientY}px)`);
        rightHand.current.setAttribute('style', `transform: translate(-${clientX}px, -${clientY}px)`);
    };

    return (
        <div className="poster">
            <div className={full ? 'wrapper' : 'wrapper half'} onMouseMove={half ? undefined : handleMouseMove}>
                <img className={half ? 'background half' : 'background'} alt="" src={img} />
                {half ? (
                    <div className="contain">
                        <h1 className="title half">{posterName}</h1>
                    </div>
                ) : (
                    <div className="contain">
                        <h1 ref={title} className="title">
                            {posterName}
                        </h1>
                        <img ref={leftHand} className="left-hand hand-img" src={images.leftHand} alt="" />
                        <img ref={rightHand} className="right-hand hand-img" src={images.rightHand} alt="" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Poster;
