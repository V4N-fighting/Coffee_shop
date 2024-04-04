import './SignIn.scss';
import Button from '../Button';
import { useState, useRef, useEffect } from 'react';
import ApiUser from '~/api/ApiUser';

function SignIn() {
    const { data } = ApiUser();
    const box = useRef();

    console.log(box);

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = () => {
        const user = data.find((dataItem) => {
            return dataItem.email === userName && password === dataItem.first_name;
        });

        localStorage.setItem('user_avatar', user.avatar);
        window.location.reload();
    };

    const handleClose = () => {
        box.current.style = 'display: none';
    };

    return (
        <div ref={box} className="sign-in">
            <div className="contain">
                <button className="close" onClick={handleClose}>
                    X
                </button>
                <h3 className="title">Sign In</h3>
                <div className="contain-item">
                    <span className="contain-item-name">Username or Email</span>
                    <input
                        className="input"
                        placeholder="Name..."
                        onChange={(e) => {
                            setUserName(e.currentTarget.value);
                        }}
                    />
                </div>
                <div className="contain-item">
                    <span className="contain-item-name">Password</span>
                    <input
                        className="input"
                        placeholder="Pass..."
                        onChange={(e) => {
                            setPassword(e.currentTarget.value);
                        }}
                    />
                </div>
                <Button primary style={{ width: '100%', marginTop: '30px' }} onClick={handleClick}>
                    Sign In
                </Button>
            </div>
        </div>
    );
}

export default SignIn;
