import { useGame } from "./GameContext";
import HighScores from "./HighScores";

const HomeScreen = () => {
  const {toggleStart} = useGame();

  return(
    <>
      <p>Welcome to whack a Mole!</p>
      <p>Whack a mole to earn points.</p>
      <p>How many can you get?</p>

      <button onClick={toggleStart}>Play</button>

      <h2>High Scores</h2>
      <HighScores />
    </>
  );
}

export default HomeScreen;