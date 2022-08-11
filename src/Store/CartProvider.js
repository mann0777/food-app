import CartContext from "./cart-context";

const CartProvider = (props)=>{
    const addItemToCartHandler = (item)=>{};

    const removeItemFromCartHandler =(id)=>{};

    const  cartContext ={
        items:[],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return<CartContext>
        {props.children}
    </CartContext>
};

export default CartProvider;