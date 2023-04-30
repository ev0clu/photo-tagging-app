# **Photo tagging app: Where's Waldo**

A photo tagging app has built based on the [Where's Waldo?](https://en.wikipedia.org/wiki/Where's_Wally%3F) game.

### Demo: [Link](https://ev0clu.github.io/photo-tagging-app/)

## Features

- Rendering page based on the route
- Choose between 3 game boards
- Custom cursor on game pages
- Timer shows the elapsed time since the game has started on the header
- Marked characters which has already found on the header
- Popup window for choose a character on the board
  - Rendering only characters are left to find
  - Different feedback depend on the character is found or not
- Rendering game over modal once all characters have found
  - Show the player's score
  - Submit button adds the score to database, than navigate to the leaderboard page
- Leaderboard page:
  - Fetch data from database based on the choosed game board

### Developement dependencies

- [React](https://react.dev/)
- [React Icons](https://www.npmjs.com/package/react-icons)
- [React Router DOM](https://www.npmjs.com/package/react-router-dom)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)

### Layout

![layout picture](https://github.com/ev0clu/photo-tagging-app/blob/main/layout.png?raw=true)

#### Assets

[Where's Waldo gameboard pictures](https://wallpaperaccess.com/wheres-waldo)<br>
[Where's Waldo character pictures](https://www.giantbomb.com/wheres-waldo/3025-1675/characters/)<br>
