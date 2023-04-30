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
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col gap-14 px-64 py-14">
        <ul className="flex flex-row justify-between gap-10">
          <LeaderboardSelector
            src={gameboards.game_1_src}
            alt={'game-1-leaderboard'}
            gameName={'Mountain'}
          />

          <LeaderboardSelector
            src={gameboards.game_2_src}
            alt={'game-2-leaderboard'}
            gameName={'Beach'}
          />

          <LeaderboardSelector
            src={gameboards.game_3_src}
            alt={'game-3-leaderboard'}
            gameName={'Space'}
          />
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Leaderboard;
