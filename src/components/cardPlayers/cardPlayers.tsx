import React, { FC, useEffect, useState } from "react";
import "./styles.css";
import { useDebounce } from "../../hooks/useDebounce";

interface Player {
  image: any;
  name: string;
  category: string;
  position: string;
}

interface CardGridProps {
  players: Player[];
}

const CardGrid: FC<CardGridProps> = ({ players }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([...players as Player[]])
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const handleLevelClick = (category: string) => {
    setSelectedLevel(category);
    setSearchTerm(""); 
    setSelectedPosition(null); 
  };

  const handlePositionClick = (position: string) => {
    setSelectedLevel("")
    setSelectedPosition((prev) => (prev === position ? null : position));
    setSearchTerm("");
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const filteredPlayers = players.filter((player) => {  
      if (debouncedSearchTerm) {
        return player.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase());
      } else return true;
    });
    setFilteredPlayers(filteredPlayers)
  }, [debouncedSearchTerm]);


  useEffect(() => {
    const filteredPlayers = players.filter((player) => {  
      if (selectedLevel !== "All") {
        return player.category === selectedLevel;
      } else return true;
    });
    setFilteredPlayers(filteredPlayers)
    
  }, [selectedLevel])

  useEffect(() => {
    const filteredPlayers = players.filter((player) => {  
      if (selectedPosition) {
          return player.position === selectedPosition;
      } else return true
    });
    setFilteredPlayers(filteredPlayers)
    
  }, [selectedPosition])

  return (
    <div>
      <div className="container button-wrapper">
        <div className="button-group align-items-center">
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Buscar jugador"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <i className="bi bi-search" style={{ color: "#CCC" }}></i>
          </div>
        </div>

        <div className="button-group">
          <button className={`shiny-button ${selectedLevel === "All" ? "active" : ""}` } onClick={() => handleLevelClick("All")}>Todos</button>
          <button className={`shiny-button ${selectedLevel === "C8" ? "active" : ""}` } onClick={() => handleLevelClick("C8")}>C8</button>
          <button className={`shiny-button ${selectedLevel === "C7" ? "active" : ""}` } onClick={() => handleLevelClick("C7")}>C7</button>
          <button className={`shiny-button ${selectedLevel === "C6" ? "active" : ""}` } onClick={() => handleLevelClick("C6")}>C6</button>
          <button className={`shiny-button ${selectedLevel === "C5" ? "active" : ""}` } onClick={() => handleLevelClick("C5")}>C5</button>
        </div>

        <div className="button-group small-group">
          <button
            className={`shiny-button-drive ${selectedPosition === "DRIVE" ? "active" : ""}`}
            onClick={() => handlePositionClick("DRIVE")}
          >
            DRIVE
          </button>
          <button
            className={`shiny-button-reves ${selectedPosition === "REVES" ? "active" : ""}`}
            onClick={() => handlePositionClick("REVES")}
          >
            REVÉS
          </button>
        </div>
      </div>

      <div className="grid-container">
        {filteredPlayers.map((player: Player, index: number) => (
          <div className="card" key={index}>
            <img src={player.image} alt={player.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;