import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"

function Update(props) {
    const { id } = useParams()
    const players = props.players
    const player = players.find((p) => p._id === id)
    let navigate = useNavigate()
  
    // state for form
    const [editForm, setEditForm] = useState(player)
  
    // handleChange function for form
    const handleChange = (event) => {
      setEditForm((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }))
    }
  
    // handlesubmit for form
    const handleSubmit = (event) => {
      event.preventDefault()
      props.updatePlayers(editForm, player._id)
      // redirect player back to index
      navigate("/")
    }

  return (
    <div className="player">
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={editForm.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.image}
            name="image"
            placeholder="image URL"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.position}
            name="position"
            placeholder="position"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.team}
            name="team"
            placeholder="team"
            onChange={handleChange}
          />
          <input type="submit" value="Update Player" />
        </form>
    </div>
  )
}

export default Update