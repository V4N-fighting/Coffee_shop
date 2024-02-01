import classNames from 'classnames';
import { useRef, useState } from 'react';
import images from '~/assets/images';
import style from './Poster.module.scss';

function Poster() {
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
        <div className={style.wrapper} onMouseMove={handleMouseMove}>
            <img className={style.background} alt="" src={images.poster} />
            <div className={style.contain}>
                <h1 ref={title} className={style.title}>
                    lovetea
                </h1>
                <img
                    ref={leftHand}
                    className={classNames(style.leftHand, style.handImg)}
                    src={images.leftHand}
                    alt=""
                />
                <img
                    ref={rightHand}
                    className={classNames(style.rightHand, style.handImg)}
                    src={images.rightHand}
                    alt=""
                />
            </div>
        </div>
    );
}

export default Poster;
