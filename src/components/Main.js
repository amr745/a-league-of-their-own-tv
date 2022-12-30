import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"

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

  useEffect(() => { getPlayers()}, [])

  return (
    <main>
      <Routes>
        <Route
          exact
          path="/"
          element={<Index players={players} createPlayers={createPlayers} />}
        />
        <Route path="/:id" element={<Show players={players} />} />
      </Routes>
    </main>
  )
}

export default Main