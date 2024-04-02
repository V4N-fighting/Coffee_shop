import './SignIn.scss';
import { USER } from '~/Component/FakeUser';
import Button from '../Button';
import { useState, useRef, useEffect } from 'react';

export let avatar = {};

function SignIn() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [avt, setAvt] = useState();

    const box = useRef();

    const handleClick = () => {
        console.log(password, USER.password);
        if (userName === USER.email && password === USER.pass) {
            localStorage.setItem('email', userName);
            localStorage.setItem('pass', password);
            window.location.reload();
        } else {
            alert('sai rồi');
        }
    };

    const handleClose = () => {
        console.log((box.current.style = 'display: none'));
    };

    useEffect(() => {
        return () => {
            avt && URL.revokeObjectURL(avt.link);
        };
    }, [avt]);

    const handlePreviewAvt = (e) => {
        const file = e.target.files[0];
        file.link = URL.createObjectURL(file);
        setAvt(file);

        // có thể mở lại ảnh giống nhau
        e.target.value = null;
    };
    return (
        <div ref={box} className="sign-in">
            <div className="contain">
                <button className="close" onClick={handleClose}>
                    X
                </button>
                <h3 className="title">Sign In</h3>
                <div className="contain-item">
                    <span className="contain-item-name">Tên đăng nhập</span>
                    <input
                        className="input"
                        placeholder="Name..."
                        onChange={(e) => {
                            setUserName(e.currentTarget.value);
                        }}
                    />
                </div>
                <div className="contain-item">
                    <span className="contain-item-name">Mật khẩu</span>
                    <input
                        className="input"
                        placeholder="Pass..."
                        onChange={(e) => {
                            setPassword(e.currentTarget.value);
                        }}
                    />
                </div>
                <div className="contain-item">
                    <span className="contain-item-name">Chọn ảnh</span>
                    <input className="input" type="file" onChange={handlePreviewAvt} />
                </div>
                <Button primary style={{ width: '100%', marginTop: '30px' }} onClick={handleClick}>
                    Sign In
                </Button>
            </div>
        </div>
    );
}

export default SignIn;
