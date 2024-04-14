import React from 'react';
import CardData from './CardData';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBContainer,

} from "mdb-react-ui-kit";
//Popularidad
 const CardContainer = () => {
  return (
    <section className='menu'>
          <MDBContainer>
      <div className='card-container'>
            <CardData />
      </div>
    </MDBContainer>
    </section>
     

  );
}

export default CardContainer;
//http://localhost/Apiresidencia/getpropietario.php