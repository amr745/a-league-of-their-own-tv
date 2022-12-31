import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"
import Create from "../pages/Create"
import Update from "../pages/Update"

function Main(props) {
  const [players, setPlayers] = useState(null)

  const URL = "https://baseball-backend.vercel.app/"

  const getPlayers = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setPlayers(data)
  }

  const createPlayers = async (player) => {
    // make post request to create players
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(player),
    })
    // update list of players
    getPlayers()
  }

  const updatePlayers = async (player, id) => {
    // make put request to create players
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(player),
    })
    // update list of players
    getPlayers()
  }

  const deletePlayers = async (id) => {
    // make delete request to create players
    await fetch(URL + id, {
      method: "DELETE",
    })
    // update list of players
    getPlayers()
  }

  useEffect(() => { getPlayers()}, [])

  return (
    <main>
      <Routes>
        <Route exact path="/" element={<Index players={players} updatePlayers={updatePlayers} />} />
        <Route path="/players/:id" element={<Show players={players} deletePlayers={deletePlayers} updatePlayers={updatePlayers} />} />
        <Route path="/create" element={<Create createPlayers={createPlayers}  />} />
        <Route path="/update/:id" element={<Update players={players} updatePlayers={updatePlayers} />} />
      </Routes>
    </main>
  )
}

export default Main