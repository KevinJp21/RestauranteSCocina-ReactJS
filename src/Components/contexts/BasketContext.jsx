import React, { createContext, useState, useEffect } from 'react';

export const BasketContext = createContext(null);

export const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState(() => {
        // Intentar recuperar la canasta desde LocalStorage al inicializar
        const savedBasket = localStorage.getItem('basket');
        return savedBasket ? JSON.parse(savedBasket) : [];
    });

    // Escuchar cambios en el estado del de la canasta y los guarda en local storage
    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basket));//stringfy convierte el objeto en una cadena de texto
    }, [basket]);

    const updateQuantity = (id, quantity) => {
        if (quantity < 1) {
            removeFromBasket(id);
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

    const removeAllFromBasket = () => {
        setBasket([]);
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
        <BasketContext.Provider value={{ basket, addToBasket, updateQuantity, removeFromBasket, removeAllFromBasket }}>
            {children}
        </BasketContext.Provider>
    );
};