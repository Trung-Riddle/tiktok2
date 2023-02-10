import classNames from "classnames/bind";
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({ to, href, primary, onClick, children}) {
    let Comp = 'button';
    const classes = cx('btn')
    return (
        <Comp className={classes}>
           <span>{children}</span> 
        </Comp>
    );
}

export default Button;