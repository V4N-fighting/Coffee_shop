import { Splide, SplideSlide } from '@splidejs/react-splide';
import './SliderMenu.scss';
import '@splidejs/react-splide/css';

function SliderMenu({ contents, marginBottom, children }) {
    return (
        <div className="slider-menu" style={{ marginBottom: marginBottom }}>
            <div className="wrapper-slider">
                <Splide
                    options={{
                        type: 'loop',
                        perPage: 3,
                        perMove: 1,
                        autoplay: true,
                        heightRatio: 0.45,
                        arrows: false,
                        speed: 500,
                    }}
                    className="list"
                >
                    {contents.map((content, index) => {
                        return <SplideSlide key={index}>{children(content)}</SplideSlide>;
                    })}
                </Splide>
            </div>
        </div>
    );
}

export default SliderMenu;
