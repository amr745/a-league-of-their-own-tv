import { useState } from "react"
import { Link } from "react-router-dom"

// import { useNavigate } from "react-router-dom";

function Create(props) {
    // state to hold formData
    const [newForm, setNewForm] = useState({
      name: "",
      image: "",
      position: "",
      team: "",
    })
  
    // handleChange function for form
    const handleChange = (event) => {
      setNewForm((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }))
    }
  
    // handle submit function for form
    const handleSubmit = (event) => {
      event.preventDefault()
      props.createPlayers(newForm)
      setNewForm({
        name: "",
        image: "",
        position: "",
        team: "",
      })
    }
  
    // loaded function
    const loaded = () => {
      return props.players.map((player) => (
        <div key={player._id} className="player">
          <Link to={`/players/${player._id}`}>
            <h1>{player.name}</h1>
          </Link>
          <img src={player.image} alt={player.name} />
          <h3>{player.position}</h3>
          <h4>{player.team}</h4>
        </div>
      ))
    }
  
    const loading = () => {
      return <h1>Loading...</h1>
    }
  
    return (
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newForm.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.image}
            name="image"
            placeholder="image URL"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.position}
            name="position"
            placeholder="position"
            onChange={handleChange}
          />
          <input
            type="text"
            value={newForm.team}
            name="team"
            placeholder="team"
            onChange={handleChange}
          />
          <input type="submit" value="Create Player" />
        </form>
        {props.players ? loaded() : loading()}
      </section>
    )
  }
  
  export default Create