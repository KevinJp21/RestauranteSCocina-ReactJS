import React, { useContext } from 'react';
import { BasketContext } from '../contexts/BasketContext';

const BasketContent = () => {
    const { basket, updateQuantity, removeFromBasket } = useContext(BasketContext);

    if (basket.length === 0) {
        return(
            <div className="containerBasketEmpty">
                <div className="logoBasketEmpty">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#6A696E" d="M12 9c.55 0 1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1h-2V2c0-.55-.45-1-1-1s-1 .45-1 1v2H9c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1zm-5 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03l3.24-6.14a.998.998 0 00-.4-1.34.996.996 0 00-1.36.41L15.55 11H8.53L4.27 2H2c-.55 0-1 .45-1 1s.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2z"></path></svg>
                </div>
                <p className='textBasketEmpty'>Tu canasta está vacia</p>
                <div className="btnBasketEmptyContainer">
                    <button className='btnBasketEmpty' onClick={() => window.location.href = '#menu'}>
                        <span className='textBtnBasketEmpty'>¡Pide ahora!</span>
                    </button>
                </div>
            </div>
        );
    }

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
                                <span>${(Number(item.precio) * item.quantity).toLocaleString('es-CO')}</span> {/*toLocaleString('es-CO')= Formatea los valores de acuerdo al pais */}
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
            {/*Se verifica si el numero de items es mayor a cero, se muestra el botón de comprar*/}
            {basket.length > 0 && (
                <div className="buyContainer" id="buyContainer">
                    <button className="delAllProducts" id="delAllProducts">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="#6A696E" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM9 9h6c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-8c0-.55.45-1 1-1zm6.5-5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1h-2.5z"></path></svg>
                    </button>
                    <button className="btnBuyProducts" id="btnBuyProducts">
                        <div className="btnContent">
                            <p className="btnTitle">Ir a pagar</p>
                            <div className="infoProducts">
                                <p className="titleSubtotal">Subtotal: </p>
                                <p className="totalPrice">$ {basket.reduce((total, item) => total + item.precio * item.quantity, 0).toLocaleString('es-CO')}</p>

                            </div>
                        </div>
                    </button>
                </div>
            )}
        </>
    );
}

export default BasketContent;