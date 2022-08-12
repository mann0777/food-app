import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../Store/cart-context';
import classes from './HeaderCardButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.length;
  
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;