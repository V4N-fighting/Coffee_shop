import './User.scss';
import { ShoppingCartOutlined } from '@ant-design/icons';

function User() {
    const avatar = localStorage.getItem('user_avatar');

    return (
        <div className="user">
            <div className="contain">
                <div className="contain-item cart">
                    <ShoppingCartOutlined />
                </div>
                <div className="contain-item avt" style={{ backgroundImage: `url(${avatar})` }}></div>
            </div>
        </div>
    );
}

export default User;
