import { useState, useEffect } from "react";
import { useGame } from "./GameContext";


const GameTimer = () => {
  const [seconds, setSeconds] = useState(15);
  const {toggleStart} = useGame();

  useEffect(()=>{
    if(seconds <= 0){
      toggleStart();
      return;
    }

    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, toggleStart]);

  return(
    <p>{seconds}</p>
  );
}

export default GameTimer;