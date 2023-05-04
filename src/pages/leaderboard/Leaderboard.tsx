import { useEffect, useState } from 'react';

import database from '../../components/firebase-config';
import { Firestore, collection, getDocs } from 'firebase/firestore';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LeaderboardSelector from './components/LeaderboardSelector';
import Button from '../../elements/Button';
import Loading from '../../components/Loading';
import ScoreList from './components/ScoreList';

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
  const [submit, setSubmit] = useState(false);
  const [gameSelector, setGameSelector] = useState('1');
  const [selection, setSelection] = useState('Mountain');
  const [scoreData, setScoreData] = useState<ScoreProps[]>([]);
  const [scoreList, setScoreList] = useState<ScoreProps[]>([]);
  const [isPreviousPage, setIsPreviousPage] = useState(false);
  const [isNextPage, setIsNextPage] = useState(false);
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(5);

  useEffect(() => {}, [gameSelector]);
  /*
  useEffect(() => {
    if (scoreData.length > 4) {
      setIsNextPage(true);
    }
  }, [scoreData]);*/

  useEffect(() => {
    let list = scoreData
      .map((data, index) => {
        if (index < lastIndex) {
          return data;
        }
      })
      .filter((data) => data !== undefined) as ScoreProps[];

    if (scoreData.length < 5) {
      list = list.slice(firstIndex, lastIndex + 1);
    }
    setScoreList(list);

    if (scoreData.length > 5) {
      setIsNextPage(true);
    } else {
      setIsNextPage(false);
    }
    return () => setScoreList([]);
  }, [scoreData, firstIndex]);

  useEffect(() => {}, []);

  const handleSelectorClick = (e: React.MouseEvent<HTMLElement>) => {
    const game = e.currentTarget.dataset.game;
    let gameId = '';

    switch (game) {
      case 'Mountain':
        gameId = '1';
        break;
      case 'Beach':
        gameId = '2';
        break;
      case 'Space':
        gameId = '3';
        break;
      default:
        gameId = '';
        break;
    }
    if (game) {
      setSelection(game);
    }
    fetchData(gameId);
    setFirstIndex(0);
    setLastIndex(5);
    setIsPreviousPage(false);
    setIsNextPage(false);
  };

  const fetchData = async (id: string) => {
    setSubmit(true);
    const data = await getLeaderboard(database, id);
    setScoreData(data);
    setSubmit(false);
  };

  const getLeaderboard = async (db: Firestore, id: string) => {
    const scoreCollection = collection(db, `game-${id}-leaderboard`);
    const scoreSnapshot = await getDocs(scoreCollection);
    const scoreList = scoreSnapshot.docs.map(
      (doc) => doc.data() as ScoreProps
    );

    return scoreList;
  };

  const handlePreviousClick = (e: React.MouseEvent<HTMLElement>) => {
    setLastIndex(lastIndex + 5);
    if (firstIndex - 5 > 0) {
      setFirstIndex(firstIndex - 5);
    } else {
      setFirstIndex(0);
    }
  };

  const handleNextClick = (e: React.MouseEvent<HTMLElement>) => {
    setFirstIndex(firstIndex + 5);
    if (lastIndex + 5 < scoreData.length) {
      setLastIndex(lastIndex + 5);
    } else {
      setLastIndex(scoreData.length);
    }
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
          {submit ? <Loading /> : <ScoreList scoreList={scoreList} />}
        </ul>
        <div className="flex w-96 flex-row justify-between text-xl">
          {isPreviousPage && (
            <Button
              className="flex w-32 cursor-pointer flex-row items-center justify-center rounded-lg border border-solid border-amber-600 bg-amber-500 px-5 py-3 text-white hover:bg-orange-500 hover:opacity-90"
              text="Previous"
              handleClick={handlePreviousClick}
            />
          )}
          {isNextPage && (
            <Button
              className="flex w-32 cursor-pointer flex-row items-center justify-center rounded-lg border border-solid border-amber-600 bg-amber-500 px-5 py-3 text-white hover:bg-orange-500 hover:opacity-90"
              text="Next"
              handleClick={handleNextClick}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Leaderboard;
