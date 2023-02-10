import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';

var cx = classNames.bind(styles)

function Header() {
    return <header className={cx('header')}>
        <div className={cx('inner')}>
            <div className={cx('logo')} >
                <img src={images.logo}  alt="logo top top"/>
            </div>
            <div className={cx('search')}>
                <input spellCheck={false} placeholder='Search account and videos' type="text" className={cx('input')} />
                <button className={cx('clear')}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
            <div className={cx('action')}>

            </div>
        </div>
    </header>;
}

export default Header;