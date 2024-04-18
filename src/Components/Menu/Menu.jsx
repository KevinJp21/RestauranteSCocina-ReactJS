import React, { useState } from "react";
import ProductData from "../../ProductsData";
import Cards from "./Cards";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBContainer } from "mdb-react-ui-kit";
import DiscreteSlider from "./DiscreteSlider";
import Pagination from "@mui/material/Pagination"; 

const Menu = () => {
  const [category, setCategory] = useState('');
  const [maxPrice, setMaxPrice] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);  // Ajustar numero items por pagina

  const handlePriceChange = (event, newValue) => {
    setMaxPrice(newValue);
  };

  // Función para cambiar de página
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section className="menu" id="menu">
      <div className="container" id="container">
        <div className="title">
          <h2 id="heading">Nuestro <span>menú</span></h2>
        </div>
        <div className="filterDish" id="filterDish">
          <div className="filterPrice" id="filterPrice">
            <h4 className="fs-4 m-0">Precio a partir de:</h4>
            <DiscreteSlider id="slider-content" value={maxPrice} onChange={handlePriceChange} />
          </div>
          <div className="filterCategory" id="filterCategory">
            <h4 className="fs-4 m-0">Categoria:</h4>
            <select className="selectCategory" id="selectCategory" value={category} onChange={e => setCategory(e.target.value)}>
              <option value="">Todas las categorías</option>
              <option value="Plato principal">Plato principal</option>
              <option value="Entrada">Entrada</option>
              <option value="Bebida">Bebida</option>
              <option value="Postre">Postre</option>
            </select>
          </div>
        </div>
      </div>
      <MDBContainer>
        <div className="card-container">
          <ProductData
            url="https://hoteless-hilton.000webhostapp.com/getFood.php"
            render={(data) => (
              <>
                {data.length > 0 ? (
                  <>
                    {data
                      .filter(dish => dish.categoria === category || category === '')
                      .filter(dish => !maxPrice || Number(dish.precio) <= Number(maxPrice))
                      .sort((a, b) => maxPrice ? Number(a.precio) - Number(b.precio) : 0)
                      .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                      .map(dish => <Cards key={dish.id} data={dish} />)
                    }
                    <Pagination className="mt-4"
                      count={Math.ceil(data.length / itemsPerPage)}
                      page={currentPage}
                      onChange={handleChangePage}
                      color="primary"
                    />
                  </>
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