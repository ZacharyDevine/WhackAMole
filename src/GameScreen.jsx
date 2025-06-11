import { useState } from "react";
import { useGame } from "./GameContext";
import GameTimer from "./GameTimer";

const GameScreen = () => {
  const {restart, score} = useGame();
  const [moleList, setMoleList] = useState([false, false, false, false, true, false, false, false, false]);

  const GetMoles = () => {
    const newMoleLoc = () => {
      setMoleList([]);
      const rand = Math.floor(Math.random() * 9);
      for(let i = 0; i < 9; i++){
        rand !== i ? setMoleList([...moleList, false]) : setMoleList([...moleList, true]);
      }
    }


    return(
      <>
        {Array.from((moleList), (mole) => {
          <div className="hole">
          </div>
        })}
      </>
    );
  }
  return(
    <>
      <p>{score}</p>
      <GameTimer />
      <button onClick={restart}>Restart</button>
      <GetMoles/>
    </>
  );


}

export default GameScreen;