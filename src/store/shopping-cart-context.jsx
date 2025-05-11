import { createContext } from 'react';

export const ShoppingCartContext = createContext({
    items: [],
    addItemToCart: () => { },
    //   totalAmount: 0,
    //   removeItem: (id) => {},
    //   clearCart: () => {},
});