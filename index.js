const {
  getAllCharacters,
  getCharacter,
  getCharacterQuotes,
  openCharacterWiki,
} = require('./controllers/characters');

const {
  getAllBooks,
  getBook,
  getBookChapters,
} = require('./controllers/books');

const {
  getAllMovies,
  getMovie,
  getMovieQuotes,
} = require('./controllers/movies');

const books = {
  getAllBooks,
  getBook,
  getBookChapters,
};

const characters = {
  getAllCharacters,
  getCharacter,
  getCharacterQuotes,
  openCharacterWiki,
};

const movies = {
  getAllMovies,
  getMovie,
  getMovieQuotes,
};

module.exports = { books, characters, movies };
