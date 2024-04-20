import React, { useContext } from 'react';
import { BasketContext } from '../contexts/BasketContext';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
    } from "mdb-react-ui-kit";

const BasketContent = () => {
    const { basket, updateQuantity } = useContext(BasketContext);

    const handleQuantityChange = (event, id) => {
        const newQuantity = parseInt(event.target.value, 10);
        if (newQuantity >= 0) {
            updateQuantity(id, newQuantity);
        }
    };

    return (
        <div>
            {basket.map((item, index) => (
                <div key={index}>
                    <h4>{item.nombre} (Cantidad: {item.quantity})</h4>
                    <p>${Number(item.precio) * item.quantity}</p>
                    <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                        <MDBBtn color="link" className="px-2" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                            <MDBIcon fas icon="minus" />
                        </MDBBtn>
                        <MDBInput 
                            type="number" 
                            className="inputQuantity"
                            min="0" 
                            value={item.quantity} 
                            onChange={(event) => handleQuantityChange(event, item.id)} 
                            size="sm" />
                        <MDBBtn color="link" className="px-2" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                            <MDBIcon fas icon="plus" />
                        </MDBBtn>
                    </MDBCol>
                </div>
            ))}
        </div>
    );
}

export default BasketContent;