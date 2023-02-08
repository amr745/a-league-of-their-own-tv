import { useParams, useNavigate } from "react-router-dom"

function Show({players, deletePlayers}) {
  const { id } = useParams()
  // const players = props.players
  const player = players.find((p) => p._id === id)
  let navigate = useNavigate()

  const removePlayer = () => {
    deletePlayers(id);
    navigate("/");
};

const updatePlayer = () => {
    // updatePlayers(id);
    navigate(`/update/${player._id}`);
};

  return (
    <div className="player">
      <h1>{player.name}</h1>
      <h2>{player.position}</h2>
      <img src={player.team} alt="Team Logo" />
      <img src={player.image} alt={player.name}/>
      <button id="update" onClick={updatePlayer}>
        UPDATE
      </button>
      <button id="delete" onClick={removePlayer}>
        DELETE
      </button>
    </div>
  )
}

export default Show