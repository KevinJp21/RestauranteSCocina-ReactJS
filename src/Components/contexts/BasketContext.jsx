import React, { createContext, useState } from 'react';

export const BasketContext = createContext(null);

export const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState([]);

    const updateQuantity = (id, quantity) => {
        if (quantity < 1) {
            removeFromBasket(id);  // Elimina el producto si la cantidad es menor que 1
        } else {
            setBasket(currentItems => {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: quantity };
                    }
                    return item;
                });
            });
        }
    };

    const removeFromBasket = (id) => {
        setBasket(currentItems => {
            return currentItems.filter(item => item.id !== id);
        });
    };

    const addToBasket = (data) => {
        setBasket((currItems) => {
            const isItemFound = currItems.find((item) => item.id === data.id);
            if (isItemFound) {
                return currItems.map((item) => {
                    if (item.id === data.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        };
                    }
                    return item;
                });
            } else {
                return [
                    ...currItems,
                    {
                        id: data.id,
                        nombre: data.nombre,
                        precio: data.precio,
                        img: data.img,
                        quantity: 1
                    }
                ];
            }
        });
    };

    return (
        <BasketContext.Provider value={{ basket, addToBasket, updateQuantity, removeFromBasket }}>
            {children}
        </BasketContext.Provider>
    );
};