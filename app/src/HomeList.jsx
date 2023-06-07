import App from "./App";
import React, {useEffect, useState} from "react";
import axios from "axios"


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
    <ul>
    {
      games.map(game => (
        <li key={game.id}>

          <h3>{game.name}</h3>
          <img style={{ width: 400, height: 400 }} src={game.background_image} alt="game"/>
        </li>
      ))
    }
    </ul>
  </div>
  )
}

export default HomeList;
