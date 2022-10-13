I have done basic API calls and one custom feature.

npm install gegi-sdk

LIBRARY EXPORTS THREE DIFFERENT OBJECTS:

1. books
2. characters
3. movies

EACH OBJECT HAS METHODS ATTACHED WHICH RETURNS PROMISE:

1. getAllBooks, getBook, getBookChapters
2. getAllCharacters, getCharacter, getCharacterQuotes, openCharacterWiki
3. getAllMovies, getMovie, getMovieQuotes

EACH METHOD TAKES PARAMETERS:

Methods: getAllBooks, getAllCharacters, getAllMovies
Parameters: (sortField, sortType)
Required: NO

Methods: getBook, getBookChapters
Parameters: (bookId)
Required: YES

Methods: getCharacter, getCharacterQuotes, openCharacterWiki
Parameters: (characterId)
Required: YES

Methods: getMovie, getMovieQuotes
Parameters: (movieId)
Required: YES

EXAMPLE UASGE:
const {books, characters, movies} = require('packagename')
books.getBook('id')

ABOUT CUSTOM FUNCTION: openCharacterWiki
it uses library called "open".
call it like: characters.openCharacterWiki(characterId)
it opens wiki webpage in default browser (works in Windows, should work in other OS too)
