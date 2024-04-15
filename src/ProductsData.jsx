import React, { useState, useEffect } from 'react';

function ProductData({ url, render }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
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
  }, [url]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return render(data);
}

export default ProductData;