import CartContext from "./cart-context";
import { useReducer } from 'react';

const defaultCartState = {
    items:[],
    totalAmount: 0

};


const cartReducer = (state, action)=>{
    if(action.type === 'ADD'){
        
        const updatedTotalAmount =  action.item.price + action.item.amount;
        const existingCartItemIndex = state.items.findIndex(
            (item)=> item.id ===action.item.id
        );

        const existingCartItem = state.items[existingCartItemIndex];
        
        let updatedItems;

        if(existingCartItem) {
           const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.itemms];
            updatedItems[existingCartItemIndex] = updatedItem
        } else{
            
            updatedItems = state.items.concat(action.item);
        }

        const updateItems = state.Items.concat(action.item);
        return{
            items: updateItems,
            totalAmount: updatedTotalAmount
        };

    }
return defaultCartState;

};

const CartProvider = (props)=>{
    const [cartState, dispatchCartActiion] = useReducer(cartReducer, defaultCartState);
    const addItemToCartHandler = (item)=>{
        dispatchCartActiion({type: 'ADD', item: item});
    };

    const removeItemFromCartHandler =(id)=>{
        dispatchCartActiion({type: 'REMOVE', id: id });
    };

    const  cartContext ={
        items:cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return(<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
    );
 };

export default CartProvider;