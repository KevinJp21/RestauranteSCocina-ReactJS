import React, { useState, useEffect } from 'react';
import Cards from './Cards';

function CardData() {
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost/API-Foods/getFood.php')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {datas.length > 0 ? (
        datas.map(data => <Cards key={data.id} data={data} />)
      ) : (
        <p>No hay datos disponibles.</p>
      )}
    </>
  );
}

export default CardData;