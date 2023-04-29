import { useEffect, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';

import Home from './pages/homepage/Homepage';
import Game1 from './pages/game/Game1';
import Game2 from './pages/game/Game2';
import Game3 from './pages/game/Game3';
import Leaderboard from './pages/leaderboard/Leaderboard';

import ImportedCharacters from './components/ImportedCharacters';
import ImportedGameboards from './components/ImportedGameboards';

const App = () => {
  const [characters, setCharacters] = useState({
    waldoSrc: '',
    odlawSrc: '',
    wizardSrc: ''
  });

  const [gameboards, setGameboards] = useState({
    game_1_src: '',
    game_2_src: '',
    game_3_src: ''
  });

  useEffect(() => {
    setCharacters(ImportedCharacters());
    setGameboards(ImportedGameboards());
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Home characters={characters} gameboards={gameboards} />
          }
        />
        <Route
          path="/game1"
          element={<Game1 gameboards={gameboards} />}
        />
        <Route
          path="/game2"
          element={<Game2 gameboards={gameboards} />}
        />
        <Route
          path="/game3"
          element={<Game3 gameboards={gameboards} />}
        />
        <Route
          path="/leaderboard"
          element={<Leaderboard gameboards={gameboards} />}
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
