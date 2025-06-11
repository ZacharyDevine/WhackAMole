import { useGame } from "./GameContext"


const HighScores = () => {
  const {listOfScores, getLargestScore} = useGame();

  if(!listOfScores){
    return(<p>None yet... Play the game!</p>);
  }else{
    return(<p>{getLargestScore()}</p>);
  }
}

export default HighScores;