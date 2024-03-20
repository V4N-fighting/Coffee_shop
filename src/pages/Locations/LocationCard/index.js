import './LocationCard.scss';
import { EnvironmentOutlined, ClockCircleOutlined } from '@ant-design/icons';
import Button from '~/Component/Button';

function LocationCard({ title, descr, time, image }) {
    return (
        <div className="location-card">
            <div className="contain">
                <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
                <div className="card-content">
                    <h4 className="card-title">{title}</h4>
                    <div className="content-item">
                        <EnvironmentOutlined className="icon" />
                        <p className="card-descr">{descr}</p>
                    </div>
                    <div className="content-item">
                        <ClockCircleOutlined className="icon" />
                        <p className="card-time">{time}</p>
                    </div>
                </div>
                <Button
                    icon
                    primary
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        right: '30px',
                        transform: 'translateY(50%)',
                        textTransform: 'capitalize',
                        padding: '12px 18px',
                    }}
                >
                    maps
                </Button>
            </div>
        </div>
    );
}

export default LocationCard;
