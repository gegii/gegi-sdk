const { lotrAuthorizedAPI } = require('../services/axios');

const getAllMovies = async (sortField, sortType) => {
  try {
    const response = await lotrAuthorizedAPI.get(
      `/movie?sort=${sortField}:${sortType}`
    );
    return response.data;
  } catch (error) {
    const errorMessage = error?.response?.data;
    throw new Error(errorMessage ? errorMessage : 'Something went wrong!');
  }
};

const getMovie = async (movieId) => {
  try {
    const response = await lotrAuthorizedAPI.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    const errorMessage = error?.response?.data;
    throw new Error(errorMessage ? errorMessage : 'Something went wrong!');
  }
};

const getMovieQuotes = async (movieId) => {
  try {
    const response = await lotrAuthorizedAPI.get(`/movie/${movieId}/quote`);
    return response.data;
  } catch (error) {
    const errorMessage = error?.response?.data;
    throw new Error(errorMessage ? errorMessage : 'Something went wrong!');
  }
};

module.exports = { getAllMovies, getMovie, getMovieQuotes };
