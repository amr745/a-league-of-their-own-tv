import { Link } from "react-router-dom"

function Index(props) {
  // loaded function
  const loaded = () => {
    return props.players.map((player) => (
      <div key={player._id} className="player">
        <Link to={`/players/${player._id}`}>
          <h1>{player.name}</h1>
        </Link>
        <img src={player.image} alt={player.name} />
        <h3>{player.title}</h3>
      </div>
    ))
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }

  return props.players ? loaded() : loading()
}

export default Index