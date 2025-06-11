import { useGame } from "./GameContext";
import HomeScreen from "./HomeScreen";
import GameScreen from "./GameScreen";

export default function App() {
  const {isStarted} = useGame();

  return(
    <>
      <h1 className="title">Whack a Mole</h1>
      {isStarted ? <GameScreen />:<HomeScreen />}
    </>
  );
}
