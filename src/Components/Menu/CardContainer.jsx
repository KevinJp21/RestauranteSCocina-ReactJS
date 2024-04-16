import React from "react";
import ProductData from "../../ProductsData";
import Cards from "./Cards";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBContainer } from "mdb-react-ui-kit";
//Popularidad
const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container" id="container">
            <div className="title">
            <h2 id="heading">Nuestro <span>menú</span></h2>
            </div>
        </div>
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

export default Menu;
//http://localhost/Apiresidencia/getpropietario.php
