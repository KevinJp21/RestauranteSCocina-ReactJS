import React, { useContext } from 'react';
import { BasketContext } from '../contexts/BasketContext';

const BasketContent = () => {
    const { basket, updateQuantity, removeFromBasket } = useContext(BasketContext);

    return (
        <>
            {basket.map((item) => (
                <div key={item.id}>
                    <div className='productItem'>
                        <div className="imgItem">
                            <img src={item.img} alt={item.nombre} />
                        </div>

                        <div className="itemInfo">
                            <div className="ItemName">
                                <p className='m-0'>{item.nombre}</p>
                            </div>
                            <div className="price-Quantity-Item">
                                <div className="priceStyle">
                                    <span>${Number(item.precio) * item.quantity}</span>
                                </div>

                                <div className="quantityItem">
                                    <div className="inputQuantityContainer">
                                        <button className="btnInput" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                            <i className="fa-solid fa-minus"></i>
                                        </button>
                                        <input
                                            disabled
                                            type="number"
                                            className="inputQuantity"
                                            value={item.quantity}
                                        />
                                        <button className="btnInput" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="btnInput btnDelItem" onClick={() => removeFromBasket(item.id)}>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                    <div className="lineWrapper"></div>
                </div>
            ))}
        </>
    );
}

export default BasketContent;