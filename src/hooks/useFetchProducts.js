import { useState, useEffect } from "react";
import { Alert } from "react-native";

const useFetchProducts = () => {

  // Estados para la lista de productos
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProductos = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://192.168.1.23:4000/api/products");
      const data = await response.json();
      setProductos(data);
    } catch (error) {
      console.error("Error al cargar productos:", error);
    } finally {
      setLoading(false);
    }
  };




  useEffect(() => {
    fetchProductos();
  }, []);

  return {

    productos,
    loading,
    fetchProductos,

  };
};

export default useFetchProducts;
