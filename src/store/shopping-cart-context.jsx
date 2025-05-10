import { createContext } from 'react';

export const ShoppingCartContext = createContext({
    items: [],
    addItemToCart: () => { },
    updateItemQuantity: () => { },
    //   totalAmount: 0,
    //   removeItem: (id) => {},
    //   clearCart: () => {},
});