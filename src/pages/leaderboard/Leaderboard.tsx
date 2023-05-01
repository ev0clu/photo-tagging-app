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

const Leaderboard = ({ gameboards }: Props) => {
  const [selector, setSelector] = useState('');
  const [scoreData, setScoreData] = useState([]);

  const handleSelectorClick = (e: React.MouseEvent<HTMLElement>) => {
    const game = e.currentTarget.dataset.game;
    if (game) {
      setSelector(game);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLeaderboard(database);
      console.log(data);
    };
    fetchData();
  }, [selector]);

  const getLeaderboard = async (db: Firestore) => {
    const scoreCollection = collection(db, `leaderboard`);
    const scoreSnapshot = await getDocs(scoreCollection);
    const scoreList = scoreSnapshot.docs.map((doc) => doc.data());

    return scoreList;
  };

  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col gap-14 px-64 py-14">
        <ul className="flex flex-row justify-between gap-10">
          <LeaderboardSelector
            src={gameboards.game_1_src}
            alt={'game-1-leaderboard'}
            gameName={'Mountain'}
            handleSelectorClick={handleSelectorClick}
          />

          <LeaderboardSelector
            src={gameboards.game_2_src}
            alt={'game-2-leaderboard'}
            gameName={'Beach'}
            handleSelectorClick={handleSelectorClick}
          />

          <LeaderboardSelector
            src={gameboards.game_3_src}
            alt={'game-3-leaderboard'}
            gameName={'Space'}
            handleSelectorClick={handleSelectorClick}
          />
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Leaderboard;
