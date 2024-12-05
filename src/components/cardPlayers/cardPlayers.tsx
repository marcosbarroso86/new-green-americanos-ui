import React , {FC, useState} from "react";
import "./styles.css";


interface Player {
    image: any;
    name: string;
    category: string
}

interface CardGridProps {
    players: Player[]
}


const CardGrid: FC<CardGridProps> = ({ players }) => {
    const [selectedLevel, setSelectedLevel] = useState("All");

    // const handleCategoryChange = (event:any) => {
    //   setSelectedCategory(event.target.value);
    // };

    const handleLevelClick = (category: string) => {
      setSelectedLevel(category);
    };
  

    const filteredPlayers = selectedLevel === "All"
      ? players
      : players.filter((player) => player.category === selectedLevel);


  return (
    <div>
      
<div className="container button-wrapper">
<div className="search-container">
  <input type="text" className="search-input" placeholder="Buscar jugador" />
  <i className="bi bi-search" style={{color: '#CCC'}}></i>
</div>
  
  {/* Grupo principal (75%) */}
  <div className="button-group">
    <button className="shiny-button" onClick={() => handleLevelClick("All")}>All</button>
    <button className="shiny-button" onClick={() => handleLevelClick("C7")}>C7</button>
    <button className="shiny-button" onClick={() => handleLevelClick("C5")}>C5</button>
    <button className="shiny-button" onClick={() => handleLevelClick("C3")}>C3</button>
    <button className="shiny-button" onClick={() => handleLevelClick("C1")}>C1</button>
  </div>

  {/* Grupo secundario (25%) */}
  <div className="button-group small-group">
    <button className="shiny-button-drive" onClick={() => console.log("DRIVE")}>D</button>
    <button className="shiny-button-reves" onClick={() => console.log("REVÉS")}>R</button>
  </div>
</div>

    <div className="grid-container">
      {filteredPlayers.map((player: Player, index: number) => (
        <div className="card" key={index}>
          <img src={player.image} alt={player.name} className="card-image" />
        </div>
      ))}
    </div>
    </div>
  );
};

export default CardGrid;