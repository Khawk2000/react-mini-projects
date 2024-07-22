import { useEffect, useState } from "react";
import "./App.css";
import Map from "./components/Map";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchItems, setSearchItems] = useState([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
      const { events } = await res.json();
      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <>
      <Header />
      {!loading ? (
        <Map
          eventData={eventData}
          searching={searching}
          searchItems={searchItems}
        />
      ) : (
        <Loader />
      )}
      {!loading && (
        <Search setSearching={setSearching} setSearchItems={setSearchItems} />
      )}
      <Footer />
    </>
  );
}

export default App;
