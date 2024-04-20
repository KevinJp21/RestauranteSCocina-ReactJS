import React, { useContext } from 'react';
import { BasketContext } from '../contexts/BasketContext';

const BasketContent = () => {
    const { basket, updateQuantity } = useContext(BasketContext);

    const handleQuantityChange = (event, id) => {
        const newQuantity = parseInt(event.target.value, 10);
        if (newQuantity >= 0) {
            updateQuantity(id, newQuantity);
        }
    };

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
                                            min="1"
                                            value={item.quantity}
                                            onChange={(event) => handleQuantityChange(event, item.id)}
                                        />
                                        <button className="btnInput" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lineWrapper"></div>
                </div>
            ))}
        </>
    );
}

export default BasketContent;