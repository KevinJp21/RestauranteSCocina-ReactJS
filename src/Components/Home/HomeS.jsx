import React from 'react'
import ProductData from "../../ProductsData";
import './Home.css';
const Home = () => {
  return (
    <>
    <ProductData
        url="http://localhost/API-Foods/getFood.php"
        render={(data) => {
            console.log(data)
          return (
            <>
             {data.length > 0 ? (
                // Filtrar para encontrar el item con ID=9
                data.filter(data => data.id === "9").map((data) => (
                  <section id="home" key={data.id}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${data.img})`,
                  }}
                  ></section>
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