import React from 'react';
import CardData from './CardData';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
//Popularidad
 const CardContainer = () => {
  return (
    <section className='menu'>
          <MDBContainer>
      <MDBRow className='card-container'>
            <CardData />
      </MDBRow>
    </MDBContainer>
    </section>
     

  );
}

export default CardContainer;
//http://localhost/Apiresidencia/getpropietario.php