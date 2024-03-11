import { Link } from 'react-router-dom';
import { SwapRightOutlined } from '@ant-design/icons';
import './Button.scss';

function Button({
    to,
    href,
    disabled = false,
    primary = false,
    outline = false,
    children,
    onClick,
    icon,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        icon,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    const classes = {
        button: true,
        primary,
        outline,
        disabled,
    };

    const keys = Object.keys(classes).filter((key) => classes[key] === true);

    return (
        <Comp className={keys.join(' ')} {...props}>
            <span className="btn-title">{children}</span>
            {icon && <SwapRightOutlined />}
        </Comp>
    );
}

export default Button;
