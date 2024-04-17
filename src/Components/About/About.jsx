import React from 'react'
import './About.css'
import ProductData from '../../ProductsData';

const About = () => {
  return (
    <section id="about">
        <div className="container" id="container">
            <h2 id="heading">Sobre <span>nosotros</span></h2>
        </div>
        <div className="row" id="container-about">
            <div className="col-lg-6" id="about-img">
                <div className="img-about">
                <ProductData
        url="https://hoteless-hilton.000webhostapp.com/getFood.php"
        render={(data) => {
          return (
            <>
             {data.length > 0 ? (
                // Filtrar para encontrar el item con ID=9
                data.filter(data => data.id === "7").map((data) => (
                    <img key={data.id} src={data.img} alt=''/>
                ))
              ) : (
                <p>No hay datos disponibles.</p>
              )}
            </>
          );
        }}
      />
                </div>
            </div>
            <div className="col-lg-6" id="about-text">
                <h3>¿Qué hace a nuestra comida especial?</h3>
                <p>Cada región de Colombia tiene su propia identidad culinaria, influenciada por su clima, geografía y tradiciones. Desde los platos andinos con influencias indígenas hasta la cocina costeña con sabores del mar, hay una gran variedad de platos para explorar.
                    <br />
                    La cocina colombiana ha sido influenciada por diversas culturas a lo largo de su historia, incluyendo la indígena, española y africana. Estas influencias se reflejan en la variedad de ingredientes, técnicas de cocina y platos que se encuentran en todo el país.
                </p>
                <button className='btn' id='btn-about'>Saber más</button>
            </div>
        </div>
    </section>
  )
}

export default About