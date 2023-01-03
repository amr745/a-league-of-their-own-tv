import { Link } from "react-router-dom"

function Index(props) {
  // loaded function
  const loaded = () => {
    return props.players.map((player) => (
      <div className="old-paper">
       <img src="https://i.imgur.com/4rKVgAQ.png" alt="overlay" />
      <div className="overlay">
       <div key={player._id} className="card">
         {/* <div className="old-paper"></div> */}
        <Link to={`/players/${player._id}`}>
        <img className="team_logo" src={player.team} alt="team logo"/>
        <img className="player" src={player.image} alt={player.name} />
        <figcaption className="name">{player.name}<br /> {player.position}</figcaption>
        </Link>
       </div>
       </div>
      </div>
    ))
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }

  return props.players ? loaded() : loading()
}

export default Index