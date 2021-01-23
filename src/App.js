import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Places from './Places'
import Data from './places-data'

const data = Data

const url = 'https://course-api.com/react-tours-project'

function App() {

  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([]);

  const fetchPlaces = async () => {
    setLoading(true) //make sure loading is set to true just incase
    const response = await fetch(url);
    const places = await response.json();
    console.log(places)
  }

  useEffect(() => {
    fetchPlaces();
  }, [])

  if (loading) {
    return (
      <main>
        < Loading />
      </main>
    );
  }
  return (
    <main>
      <Places />
    </main>
  );
}

export default App

