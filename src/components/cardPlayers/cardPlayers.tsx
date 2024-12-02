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
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleCategoryChange = (event:any) => {
      setSelectedCategory(event.target.value);
    };
  
    const filteredPlayers = selectedCategory === "All"
      ? players
      : players.filter((player) => player.category === selectedCategory);


  return (
    <div>
        <div className="filter-container">
        <label htmlFor="category-filter">Filter by Category:</label>
        <select id="category-filter" onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="DRIVE">Drive</option>
          <option value="BACKHAND">Backhand</option>
          <option value="C7">C7</option>
          <option value="C5">C5</option>
          {/* Agrega más opciones según las categorías disponibles */}
        </select>
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