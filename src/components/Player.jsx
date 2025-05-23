import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  let btnCaption = isEditing ? "Save" : "Edit";
  function handleClick(isEditing) {
    if (isEditing) {
      setIsEditing(false);
      onChangeName(symbol, playerName);
    } else {
      setIsEditing(true);
    }
  }
  function handleChange(event) {
    const playerName = event.target.value;
    setPlayerName(playerName);
  }
  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={(event) => handleChange(event)}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => handleClick(isEditing)}>{btnCaption}</button>
    </li>
  );
}
