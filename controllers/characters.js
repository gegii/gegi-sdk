const { lotrAuthorizedAPI } = require('../services/axios');
const { openWebPage } = require('../services/open');

const getAllCharacters = async (sortField, sortType) => {
  try {
    const response = await lotrAuthorizedAPI.get(
      `/character?sort=${sortField}:${sortType}`
    );
    return response.data;
  } catch (error) {
    const errorMessage = error?.response?.data;
    throw new Error(errorMessage ? errorMessage : 'Something went wrong!');
  }
};

const getCharacter = async (characterId) => {
  try {
    const response = await lotrAuthorizedAPI.get(`/character/${characterId}`);
    return response.data;
  } catch (error) {
    const errorMessage = error?.response?.data;
    throw new Error(errorMessage ? errorMessage : 'Something went wrong!');
  }
};

const getCharacterQuotes = async (characterId) => {
  try {
    const response = await lotrAuthorizedAPI.get(
      `/character/${characterId}/quote`
    );
    return response.data;
  } catch (error) {
    const errorMessage = error?.response?.data;
    throw new Error(errorMessage ? errorMessage : 'Something went wrong!');
  }
};

const openCharacterWiki = async (characterId) => {
  try {
    const character = await getCharacter(characterId);
    openWebPage(character?.docs[0]?.wikiUrl);
    return 'Web page opened in default browser!';
  } catch (error) {
    console.log(error);
    const errorMessage = error?.response?.data;
    throw new Error(errorMessage ? errorMessage : 'Something went wrong!');
  }
};

module.exports = {
  getAllCharacters,
  getCharacter,
  getCharacterQuotes,
  openCharacterWiki,
};
