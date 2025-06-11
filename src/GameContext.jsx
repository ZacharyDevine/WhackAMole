import { useContext, createContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({children}) => {
  const [isStarted, setIsStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [listOfScores, setListOfScores] = useState([]);
  
  const toggleStart = () => {
    setIsStarted(!isStarted);
  }

  const moleClicked = () => {
    setScore(score + 1);
  }

  const restart = () => {
    toggleStart();
    setScore(0);
  }

  const gameOver = () => {
    setListOfScores(prevList => [...prevList, score]);
    restart();
  }

  const getLargestScore = () => {
    const largest = Math.max(...listOfScores);
    return largest;
  }

  const value = {isStarted, score, listOfScores, toggleStart, moleClicked, restart, gameOver, getLargestScore};
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

export const useGame = () => {
  const context = useContext(GameContext);
  if(!context){
    throw Error(`useGame must be within a game context provider!`);
  }

  return context;
}