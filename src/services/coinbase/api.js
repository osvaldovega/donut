import axios from 'axios';

const APi_URI = 'https://api.pro.coinbase.com';

const getMarketInformation = async () => {
  try {
    const response = await axios.get(`${APi_URI}/products`);
    if (response.status === 200) return response;
  } catch(error) {
    throw error;
  }
};

const getMarketInformationStats = async (id) => {
  try {
    const response = await axios.get(`${APi_URI}/products/${id}/stats`);
    if (response.status === 200) return response;
  } catch(error) {
    throw error;
  }
};

export default {
  getMarketInformation,
  getMarketInformationStats,
};
