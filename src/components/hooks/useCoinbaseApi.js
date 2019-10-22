import React, { useState, useEffect } from 'react';
import api from '../../services/coinbase/api';

const useCoinbaseAPI = (fnName, id = 0) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await api[fnName](id);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      setData([]);
    }
  }

  useEffect(() => { fetchData() }, []);
  return {
    data,
    isError,
    isLoading,
  };
}

export default useCoinbaseAPI;
