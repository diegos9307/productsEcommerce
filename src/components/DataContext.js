/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [card, setCard] = useState([]);

  useEffect(() => {
    const getCard = async () => {
      const url = 'https://fakestoreapi.com/products';
      const result = await axios.get(url);
      setCard(result.data);
    };
    getCard();
  }, []);
  return <DataContext.Provider value={{ card }}>{children}</DataContext.Provider>;
}

export default DataContext;
