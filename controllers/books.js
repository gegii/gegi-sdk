const { lotrAPI } = require('../services/axios');

const getAllBooks = async (sortField, sortType) => {
  try {
    const response = await lotrAPI.get(`/book?sort=${sortField}:${sortType}`);
    return response.data;
  } catch (error) {
    const errorMessage = error?.response?.data;
    throw new Error(errorMessage ? errorMessage : 'Something went wrong!');
  }
};

const getBook = async (bookId) => {
  try {
    const response = await lotrAPI.get(`/book/${bookId}`);
    return response.data;
  } catch (error) {
    const errorMessage = error?.response?.data;
    throw new Error(errorMessage ? errorMessage : 'Something went wrong!');
  }
};

const getBookChapters = async (bookId) => {
  try {
    const response = await lotrAPI.get(`/book/${bookId}/chapter`);
    return response.data;
  } catch (error) {
    const errorMessage = error?.response?.data;
    throw new Error(errorMessage ? errorMessage : 'Something went wrong!');
  }
};

module.exports = { getAllBooks, getBook, getBookChapters };
