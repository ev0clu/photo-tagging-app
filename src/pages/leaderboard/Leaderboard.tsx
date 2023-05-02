import { useEffect, useState } from 'react';

import database from '../../components/firebase-config';
import { Firestore, collection, getDocs } from 'firebase/firestore';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LeaderboardSelector from './components/LeaderboardSelector';

interface Props {
  gameboards: {
    game_1_src: string;
    game_2_src: string;
    game_3_src: string;
  };
}

interface ScoreProps {
  name: string;
  minute: number;
  second: number;
}

const Leaderboard = ({ gameboards }: Props) => {
  const [gameSelector, setGameSelector] = useState('1');
  const [selection, setSelection] = useState('Mountain');
  const [scoreData, setScoreData] = useState<ScoreProps[]>([]);

  const handleSelectorClick = (e: React.MouseEvent<HTMLElement>) => {
    const game = e.currentTarget.dataset.game;
    if (game !== undefined) {
      setSelection(game);
    }
    let selectedGame = '';
    if (game) {
      switch (game) {
        case 'Mountain':
          selectedGame = '1';
          break;
        case 'Beach':
          selectedGame = '2';
          break;
        case 'Space':
          selectedGame = '3';
          break;
        default:
          selectedGame = '';
          break;
      }
      setGameSelector(selectedGame);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLeaderboard(database);
      setScoreData(data);
    };

    fetchData();
  }, [gameSelector]);

  const getLeaderboard = async (db: Firestore) => {
    const scoreCollection = collection(
      db,
      `game-${gameSelector}-leaderboard`
    );
    const scoreSnapshot = await getDocs(scoreCollection);
    const scoreList = scoreSnapshot.docs.map(
      (doc) => doc.data() as ScoreProps
    );

    return scoreList;
  };

  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center justify-start gap-14 px-64 py-14">
        <ul className="flex flex-row justify-between gap-10">
          <LeaderboardSelector
            src={gameboards.game_1_src}
            alt={'game-1-leaderboard'}
            gameName={'Mountain'}
            selection={selection}
            handleSelectorClick={handleSelectorClick}
          />

          <LeaderboardSelector
            src={gameboards.game_2_src}
            alt={'game-2-leaderboard'}
            gameName={'Beach'}
            selection={selection}
            handleSelectorClick={handleSelectorClick}
          />

          <LeaderboardSelector
            src={gameboards.game_3_src}
            alt={'game-3-leaderboard'}
            gameName={'Space'}
            selection={selection}
            handleSelectorClick={handleSelectorClick}
          />
        </ul>
        <ul className="flex flex-col gap-1">
          {scoreData.map((data, index) => {
            return (
              <li
                key={`score${index}`}
                data-index={index}
                className="flex w-96 flex-row justify-between rounded-lg border-4 border-solid border-neutral-200 px-8 py-2 text-lg"
              >
                <div className="flex flex-row gap-3">
                  <div className="font-bold">
                    {index + 1}
                    {'.'}
                  </div>
                  {data.name}
                </div>
                <div>
                  {data.minute}:
                  {data.second.toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                    useGrouping: false
                  })}
                </div>
              </li>
            );
          })}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Leaderboard;
