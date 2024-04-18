import React, { useState } from "react";
import ProductData from "../../ProductsData";
import Cards from "./Cards";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBContainer } from "mdb-react-ui-kit";
import DiscreteSlider from "./DiscreteSlider";

const Menu = () => {
  const [category, setCategory] = useState('');  // Estado para la categoría seleccionada
  const [maxPrice, setMaxPrice] = useState(0);  // Estado inicial para el precio máximo, ajustado al máximo del Slider

  const handlePriceChange = (event, newValue) => {
    setMaxPrice(newValue);
  };

  return (
    <section className="menu" id="menu">
      <div className="container" id="container">
        <div className="title">
          <h2 id="heading">Nuestro <span>menú</span></h2>
        </div>
        <div className="filterDish" id="filterDish">
          {/* Componente Slider para seleccionar el precio máximo */}
          <div className="filterPrice" id="filterPrice">
          <h4 className="fs-4m-0">Precio a partir de:</h4>
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
                  data
                    .filter(dish => dish.categoria === category || category === '')  // Filtra los datos por categoría
                    .filter(dish => !maxPrice || Number(dish.precio) <= Number(maxPrice))  // Filtra los datos por precio máximo
                    .sort((a, b) => maxPrice ? Number(a.precio) - Number(b.precio) : 0)  // Ordena los datos por precio si se especifica un precio máximo
                    .map(dish => <Cards key={dish.id} data={dish} />)  // Muestra los datos filtrados y ordenados
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