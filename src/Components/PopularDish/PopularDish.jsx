import React from 'react'
import './PopularDish.css'
import ProductData from '../../ProductsData'

const PopularDish = () => {
  return (
    <section id="popular-dish">
        <div className="container" id="container">
            <div className="title">
            <h2 id="heading">Comidas <span>populares</span></h2>
            </div>
            <div className="row" id="container-popular-dish">
           <ProductData
    url="http://localhost/API-Foods/getFood.php"
    render={(data) => {
       if(data && data.length > 0) {
        //Se ordenan los datos de mayor a menor segun la cantidad vendida
        const sortedData = data.sort((a, b) => b.cant_vendidos - a.cant_vendidos).slice(0, 3);
        return(
            <>
            {sortedData.map((data) =>
                <div key={data.id} className='col-md-6 col-lg-4 m-0 mb-3' id="top-dish"> 
                        <img src={data.img} alt={data.nombre} id="img_top" />
                </div>
            )}
            </>
        )
       }
    }}
/>
            </div>
        </div>

    </section>
  )
}

export default PopularDish