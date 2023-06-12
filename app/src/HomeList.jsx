import React, {useEffect, useState} from "react";
import { Main, GameList, GameItem, GameTitle, GameImage } from "./Styled";
import { Link } from 'react-router-dom';

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

    <Main>
      <h2>Suggested Games:</h2>
      <GameList>
  {games.map(game => (
    <GameItem key={game.id}>
      <GameTitle>{game.name}</GameTitle>
      <GameImage src={game.background_image} alt="game" />
    </GameItem>
  ))}
</GameList>
  </Main>

  )
}

export default HomeList;
