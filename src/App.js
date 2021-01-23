import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Places from './Places'
import Data from './places-data'

// const url = 'https://google.com/images'
const url = { Data }
function App() {

  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([]);

  if (loading) {
    return (
      <main>
        < Loading />
      </main>
    )
  }
  return
  <>

  </>
}

export default App

