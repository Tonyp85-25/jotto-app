| Key          | Datatype           | Description                                                       | starting value   |
| ------------ | ------------------ | ----------------------------------------------------------------- | ---------------- |
| secretWord   | _string_           | word the user is trying to guess                                  | word from server |
| success      | _boolean_          | whether or not the word has been guessed correctly                | false            |
| guessedWords | _array of objects_ | array of objects :`{guessedWord: string,letterMatchCount:number}` | []               |
