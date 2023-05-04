import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import GameSelector from './components/GameSelector';
import Button from '../../elements/Button';

interface Props {
  characters: {
    waldoSrc: string;
    odlawSrc: string;
    wizardSrc: string;
  };
  gameboards: {
    game_1_src: string;
    game_2_src: string;
    game_3_src: string;
  };
}

const Home = ({ characters, gameboards }: Props) => {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center gap-14 px-6 py-14 xl:items-stretch xl:px-64">
        <ul className="flex flex-col justify-between gap-10 xl:flex-row">
          <Link to="/game/1">
            <GameSelector
              src={gameboards.game_1_src}
              alt={'game-1'}
              gameName={'Mountain'}
              characters={characters}
            />
          </Link>
          <Link to="/game/2">
            <GameSelector
              src={gameboards.game_2_src}
              alt={'game-2'}
              gameName={'Beach'}
              characters={characters}
            />
          </Link>
          <Link to="/game/3">
            <GameSelector
              src={gameboards.game_3_src}
              alt={'game-3'}
              gameName={'Space'}
              characters={characters}
            />
          </Link>
        </ul>
        <div className="flex w-56 flex-col items-center justify-between gap-4 rounded-2xl bg-stone-50 px-6 py-8 text-xl shadow-custom-2 md:w-96 md:gap-10 xl:w-auto xl:flex-row">
          <div className="text-center">Are you a Waldo expert?</div>
          <Link to="/leaderboard">
            <Button
              className="flex cursor-pointer flex-row items-center justify-center rounded-lg border border-solid border-amber-600 bg-amber-500 px-6 py-3 text-white hover:bg-orange-500 hover:opacity-90 md:px-10"
              text="Go to Leaderboard"
            />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
