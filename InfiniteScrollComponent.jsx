import React, { useState, useEffect } from 'react';

function InfiniteScrollComponent() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const loadMoreItems = async () => {
            if (isLoading || !hasMore) return;

            setIsLoading(true);
            const response = await fetch(`http://localhost/API-Foods/getFood.php`);
            const newData = await response.json();
            
            setItems(prevItems => [...prevItems, ...newData]);
            setIsLoading(false);
            setPage(prevPage => prevPage + 1);
            
            // Debes modificar la condición según tu API
            if (newData.length === 0 || newData.length < tamañoEsperadoPorPágina) {
                setHasMore(false);
            }
        };

        // Evento para detectar el scroll
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) return;
            loadMoreItems();
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading, hasMore, page]);

    return (
        <div>
            {items.map(item => (
                <div key={item.id} className="item">
                    <p>{item.nombre}</p>
                </div>
            ))}
            {isLoading && <p>Cargando más items...</p>}
        </div>
    );
}

export default InfiniteScrollComponent;