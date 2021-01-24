import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Places from './Places'

const data = [
  {
    id: 1,
    city: "Dixon",
    address: "470 Syracuse Ln, Dixon, CA 95620",
    info: "Welcome home! This beautiful 5 bedroom 3 bathroom home has real manufactured hard wood floors, Granite counter tops with a massive island and large farmhouse sink and a large pantry. There is 1 bedroom and full bath downstairs with owned solar! The backyard has lovely stamped concrete, large cedar gazebo and planter boxes. Plus many more upgrades. Short walk to Heritage Park and downtown Dixon!",
    image: "https://photos.zillowstatic.com/fp/32c0f0239603466301d21001c0c18be6-o_a.webp",
    price: "610,910",
    link: "https://www.zillow.com/homedetails/470-Syracuse-Ln-Dixon-CA-95620/245507650_zpid/"
  },
  {
    id: 2,
    city: "Medford",
    address: "2693 Lawnview Dr, Medford, OR 97504",
    info: "Beautiful, light & open, turnkey WL Moore home in desirable East Medford neighborhood. Awesome kitchen remodel (2020) with leathered granite countertops, canned lighting, solar tube, breakfast bar on the island, utility sink; well-planned storage with soft touch drawer slides, pull-outs, spice cabinets, pantry, etc. Large tiled-floor dining room open to kitchen. Enjoy the outdoors from the lovely sunroom that provides additional living space (9.5'x24' not included in 1734sf) - heat, air conditioning, windows all ",
    image: "https://photos.zillowstatic.com/fp/e3127aa2447782a823fe414fd27d5443-cc_ft_576.jpg",
    price: "400,000",
    link: "https://www.zillow.com/myzillow/favorites#48357788"
  },
  {
    id: 3,
    city: "Medford",
    address: "1501 Miracle Ln, Medford, OR 97504",
    info: "Income potential while you live in this  4 bedroom 3 bath w/ an office. Large galley kitchen, dining area w/barn doors to bonus sunroom. Large living room w/wood stove insert. Oversized laundry room and a separate pantry. The home is laid out for flexibility.  Master bedroom has been converted to a studio w/kitchenette and ample living area for a double bed. It has a private French door entrance and patio area. Great area for extended family.  ",
    image: "https://photos.zillowstatic.com/fp/ac8f662c430018dbfa61ca87c1502fa2-cc_ft_576.jpg",
    price: "399,000",
    link: "https://www.zillow.com/myzillow/favorites#48335686"
  },
  {
    id: 4,
    city: "Cool",
    address: "2521 Otter Trl, Cool, CA 95614",
    info: "Updated much inside of home and exterior grounds 2019-2020. Views from inside most rooms , wrap around deck access with multiple views and sitting areas. Handicap access. Propane also includes fireplace and BBQ. Vaulted wood ceilings, new flooring, lighting, skylights, stainless appliances and more. large rooms, most with sliders to multiple decks. Single story except for full au pair and private downstairs exit with parking. Fenced orchard. ",
    image: "https://photos.zillowstatic.com/fp/76861ab5581496a5d368360aee5280c4-cc_ft_576.jpg",
    price: "625,000"
  },
  {
    id: 5,
    city: "Sacramento",
    address: "8401 Pastori Way, Sacramento, CA 95828",
    info: "Well Maintained Corner Lot Home with Bonus Enclosed Sun Room & RV Possible Parking. Beautiful 2-Story Home with Downstairs Bedroom & Full Bathroom. Vaulted Ceiling in Living & Formal Dining room. Separate Family Room with Cozy Fireplace. Chef's Kitchen with Granite Counter-tops & Gas Range. Big Master Bedroom, Walk-in Closet and Master-Bath with Sunken Tub & Shower Stall. Spacious Bedrooms. Skylight in Upstairs Loft area. Abundance of Fruit Trees in Front and Backyard. ",
    image: "https://photos.zillowstatic.com/fp/2153a989c7924dd3a00ef510d7c9eee2-cc_ft_576.jpg",
    price: "489,900",
    link: "https://www.zillow.com/myzillow/favorites#25905274"
  }
]

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
      const response = await fetch(data);
      const places = data;
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

