import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
   className,
   to,
   href,
   primary,
   outline,
   leftIcon,
   rightIcon,
   small,
   large,
   text,
   onClick,
   children,
   ...passProps
}) {
   let Comp = 'button';
   const props = {
      onClick,
      ...passProps,
   };
   if (to) {
      props.to = to;
      Comp = Link;
   } else if (href) {
      props.href = href;
      Comp = 'a';
   }
   const classes = cx('btn', {
      primary,
      outline,
      small,
      large,
      text,
   }, className);
   return (
      <Comp className={classes} {...props}>
         {leftIcon && <span>{leftIcon}</span>}
         <span>{children}</span>
         {rightIcon && <span>{rightIcon}</span>}
      </Comp>
   );
}

export default Button;
