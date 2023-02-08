import { Link } from "react-router-dom"

function Index(props) {
  // loaded function
  const loaded = () => {
    return props.players.map((player) => (
      <div className="card-container">
        <div className="old-paper-overlay"></div>
      <div className="card-content">
      <div key={player._id} className="card">
        <Link to={`/players/${player._id}`}>
              <img className="team_logo" src={player.team} alt="team logo"/>
              <img className="playerPic" src={player.image} alt={player.name} />
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