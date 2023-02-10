import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://i.pinimg.com/564x/00/b1/f4/00b1f49bccc80b5508df930b34e22a6c.jpg" alt="Hoaa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}> 
                    <span>Hoa.hannah</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                 </h4>
                <span className={cx('username')}>Đào Lê Phương Hoa</span>
            </div>
        </div>
    )
}

export default AccountItem;