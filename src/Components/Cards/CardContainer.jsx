import React from "react";
import ProductData from "../../ProductsData";
import Cards from "./Cards";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBContainer } from "mdb-react-ui-kit";
//Popularidad
const CardContainer = () => {
  return (
    <section className="menu">
      <MDBContainer>
        <div className="card-container">
          <ProductData
            url="http://localhost/API-Foods/getFood.php"
            render={(data) => (
              <>
                {data.length > 0 ? (
                  data.map((item) => <Cards key={item.id} data={item} />)
                ) : (
                  <p>No hay datos disponibles.</p>
                )}
              </>
            )}
          />
        </div>
      </MDBContainer>
    </section>
  );
};

export default CardContainer;
//http://localhost/Apiresidencia/getpropietario.php
