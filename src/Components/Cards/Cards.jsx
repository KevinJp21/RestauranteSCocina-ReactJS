import React from 'react'
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


function dishRating({ data }) {
    const rating = data.popularidad;
    const stars = [];
  
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        // Agrega una estrella completa con una clave única
        stars.push(<MDBIcon key={`star-full-${i}`} fas icon="star" />);
      } else if (i - 1 < rating && i > rating) {
        // Agrega una media estrella
        stars.push(<MDBIcon key={`star-half-${i}`} fas icon="star-half-alt" />);
      } else {
        // Agrega una estrella vacía
        stars.push(<MDBIcon key={`star-empty-${i}`} far icon="star" />);
      }
    }
  
    return (
      <div className="ms-auto">
        {stars}
      </div>
    );
  }

  function Cards({ data }) {
  return (
    <>
    <MDBCol md="12" lg="4" className="mb-4 mb-lg-0 card">
          <MDBCard>
            <MDBCardImage
              src={data.img}
              position="top"
              alt="Gaming Laptop"
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

              <div className="d-flex justify-content-between mb-2">
                <p className="text-muted mb-0">
                 Popularidad
                </p>
                {dishRating({data})}
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
    </>
  )
}

export default Cards