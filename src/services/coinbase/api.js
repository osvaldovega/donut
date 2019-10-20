import axios from 'axios';

const APi_URI = 'https://api.pro.coinbase.com';

const getProducts = async () => {
  try {
    const response = await axios(`${APi_URI}/products`);
    if (response.status === 200) return response;
  } catch(error) {
    throw error;
  }
};

const getProductStats24Hrs = async (id) => {
  try {
    const response = await axios(`${APi_URI}/products/${id}/stats`);
    if (response.status === 200) return response;
  } catch(error) {
    throw error;
  }
};

export default {
  getProducts,
  getProductStats24Hrs,
};
