import styles from './Button.module.scss'
import clsx from 'clsx'
import myAlert from '~/myAlert'

function Button({primary, valueBtn}) {
    const classes = clsx(styles.btn, {
        [styles.primary]: primary
    })
    return (
        <button onClick={myAlert} className={classes}>{valueBtn}</button>
    )
}
export default Button