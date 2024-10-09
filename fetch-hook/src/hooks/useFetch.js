import React, { useState, useEffect } from "react";

// Custom hook useFetch
export const useFetch = (url, delay, text) => {
  // Estado para los datos
  const [data, setData] = useState(null);
  // Estado para manejar el error
  const [error, setError] = useState(null);
  // Estado para manejar la carga
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Función que realiza el fetch
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${url}${text}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result.products);
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    // Llamamos al fetchData
    const timeout = setTimeout(() => {
      fetchData();
    }, delay);

    return () => clearTimeout(timeout);
  }, [url, delay, text]);

  // Retornamos el estado para usarlo en los componentes
  return { data, loading, error };
};
