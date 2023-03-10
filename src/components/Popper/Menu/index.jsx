import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
   const renderItems = () => {
      return items.map((item, index) => <MenuItem key={index} data={item} />);
   };
   return (
      <Tippy
         delay={[0, 500]}
         interactive //được phép tương tác bên trong box tippy
         //visible // ẩn hiện theo điều kiện
         placement="bottom-end"
         render={(attrs) => (
            <div className={cx('menu-items')} {...attrs}>
               <PopperWrapper className={cx('menu-popper')}>
                  <div>{renderItems()}</div>
               </PopperWrapper>
            </div>
         )}
      >
         {children}
      </Tippy>
   );
}

export default Menu;
