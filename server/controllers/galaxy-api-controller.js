require('dotenv').config();
const axios = require('axios');
const { Apod } = require('../models');

const NASA_API = process.env.REACT_APP_NASA_TOKEN;

module.exports = {
  async getApod() {
    const BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API}`;

    try {
      const response = await axios.get(BASE_URL);
      console.log('RES', response.data);
    } catch (error) {
      console.error('ERR', error);
    }
  },
};
