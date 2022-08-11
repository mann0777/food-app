import React from "react";

const CartContext = React.createContext({
    item: [],
    totalAmounnt:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}

});

export default CartContext;