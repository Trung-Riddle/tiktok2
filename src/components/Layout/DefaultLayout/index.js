import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss"
import Header from "~/components/Layout/components/Header";
import Sidebar from "./Sidebar";


var cx = classNames.bind(styles)    

function DefaultLayout({children}) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('contents')}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;