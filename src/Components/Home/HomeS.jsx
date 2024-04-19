import React from 'react'
import ProductData from "../../ProductsData";
import './Home.css';
const Home = () => {
  return (
    <>
    <ProductData
        url="https://hoteless-hilton.000webhostapp.com/getFood.php"
        render={(data) => {
          return (
            <>
             {data.length > 0 ? (
                // Filtrar para encontrar el item con ID=9
                data.filter(data => data.id === "9").map((data) => (
                  <section id="home" key={data.id}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${data.img})`,
                  }}
                  >
                    <div className="content" id="content">
                        <h3>
                          Mejora tu día con 
                          <br />
                          comida 100% Colombiana
                        </h3>
                        <p>
                        Explora la diversidad de sabores de Colombia a través de nuestros platos, que te llevarán desde las montañas de los Andes hasta las costas del Caribe.
                        </p>
                        <button className='btn btn-buy' id="btn-home">¡Pide ahora!</button>
                    </div>
                  </section>
                ))
              ) : (
                <p>No hay datos disponibles.</p>
              )}
            </>
          );
        }}
      />
    </>
  )
}

export default Home;