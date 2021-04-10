/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - guessed word
 * @param {string} secretWord - secret word
 * @returns {number} - number of letters matched between guessed word and secret word
 */
export function getLetterMatchCount(guessedWord,secretWord){
 const secretLetters = secretWord.split('')
    const guessedLetterSet = new Set(guessedWord)
    return secretLetters.filter(letter=>guessedLetterSet.has(letter)).length
}