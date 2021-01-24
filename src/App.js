import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Places from './Places'
import Data from './places-data'

const data = Data

const url = 'https://course-api.com/react-tours-project'

function App() {

  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([]);

  const removePlace = (id) => {
    const newPlaces = places.filter((place) => place.id !== id);
    setPlaces(newPlaces);
  }

  const fetchPlaces = async () => {
    setLoading(true) //make sure loading is set to true just incase

    try {
      const response = await fetch(url);
      const places = await response.json();
      setLoading(false);
      setPlaces(places);
    } catch (error) {
      setLoading(false);
      console.log(error)
    }
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

  if (places.length === 0) {
    return <main>
      <div className="title">
        <h2>No places left</h2>
        <button className="btn" onClick={fetchPlaces}>
          Refresh all places
        </button>
      </div>
    </main>
  }

  return (
    <main>
      <Places places={places} removePlace={removePlace} />
    </main>
  );
}

export default App

