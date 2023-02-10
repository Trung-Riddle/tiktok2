import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles)

function Header() {
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResults([])
        }, 0)
    }, [])
    return <header className={cx('header')}>
        <div className={cx('inner')}>
            <div className={cx('logo')} >
                <img src={images.logo}  alt="logo top top"/>
            </div>
            <Tippy  
                    interactive
                    visible={searchResults.length > 0}
                    render={attrs => (
                        <div {...attrs} tabIndex='-1' className={cx('search-result')}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
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
            </Tippy>
            <div className={cx('action')}>
                    <Button>Login</Button>
            </div>
        </div>
    </header>;
}

export default Header;