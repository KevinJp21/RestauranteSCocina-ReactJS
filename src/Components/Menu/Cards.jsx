import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Rating } from '@mui/material';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn
} from "mdb-react-ui-kit";

import './menu.css'


function dishRating({ data }) {
    const rating = data.popularidad;
    const stars = [];
  
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        // Agrega una estrella completa con una clave única
        stars.push(<MDBIcon key={`star-full-${i}`} fas icon="star" />);
        <rating name="read-only" defaultValue={2.5} prescision={0.5} />
      } else if (i - 1 < rating && i > rating) {
        // Agrega una media estrella
        stars.push(<MDBIcon key={`star-half-${i}`} fas icon="star-half-alt" />);
      } else {
        // Agrega una estrella vacía
        stars.push(<MDBIcon key={`star-empty-${i}`} far icon="star" />);
      }
    }
  
    return (
      <div className="ms-auto stars">
        {stars}
      </div>
    );
  }

  function Cards({ data }) {
  return (
    <>
    <MDBCol  md="6" lg="4" className="container-fluid m-0 mb-3">
          <MDBCard className='card-body'>
            <MDBCardImage
              src={data.img}
              position="top"
              alt={data.nombre}
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <p className="small">
                  <a href="#!" className="text-muted">
                    {data.categoria}
                  </a>
                </p>
                <p className="small text-danger">
                  <s>${data.precio}</s>
                </p>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <h5 className="mb-0">{data.nombre}</h5>
                <h5 className="text-dark mb-0">${data.precio}</h5>
              </div>
                {dishRating({data})}
              <div className="buy">
              <button className='btn btn-buy'> Comprar</button>
              <button className='cart'><i className="fa-solid fa-cart-shopping"></i></button>
              </div>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
    </>
  )
}

export default Cards