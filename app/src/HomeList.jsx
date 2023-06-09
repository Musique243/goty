import React, {useEffect, useState} from "react";
import { GameList, GameItem, GameTitle, GameImage } from "./Styled";

const HomeList = () => {
  useEffect(() => {
    getGames()
  },[])

  const getGames = () => {
    fetch(`https://rawg.io/api/collections/must-play/games`)
    .then(resp => resp.json())
    .then(({results}) => setGames(results))
  };
  const [games, setGames] = useState([])
  return(
    <div>
      <h2>Suggested Games:</h2>
      <GameList>
  {games.map(game => (
    <GameItem key={game.id}>
      <GameTitle>{game.name}</GameTitle>
      <GameImage src={game.background_image} alt="game" />
    </GameItem>
  ))}
</GameList>
    {/* <ul> */}
    {/* {
      games.map(game => (
        <li key={game.id}>

          <h3>{game.name}</h3>
          <img style={{ width: 400, height: 400 }} src={game.background_image} alt="game"/>
         </li>
      ))
    } */}
    {/* </ul> */}
  </div>
  )
}

export default HomeList;
