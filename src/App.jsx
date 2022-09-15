import "./App.css";
import { useState } from "react";
import { useFeatureFlag } from "configcat-react";

export default function App() {
  const [location, setLocation] = useState("");
  // Get Feature flag's value and loading state
  const { value: flagValue, loading } = useFeatureFlag("geolocationflag");

  // get coordinates/update location - using destructuring
  function getPosition({ coords: { latitude, longitude } }) {
    setLocation({ latitude, longitude });
  }

  // Get user's geolocation position
  const handleClick = () => {
    navigator.geolocation.getCurrentPosition(getPosition);
  };

  // Render UI
  return (
    <div className='App'>
      {loading && <p>Loading…</p>}

      {/* Render only if Feature flag is toggled on */}
      {flagValue && (
        <>
          <h2>Location Tracker</h2>
          <button onClick={handleClick}>Get Location</button>
          {location && (
            <div className='card'>
              <h4>Your current Location is:</h4>
              <p>
                <span> Latitude:</span> {location.latitude}
              </p>
              <p>
                <span>Longitude:</span> {location.longitude}
              </p>
            </div>
          )}
        </>
      )}

      {/* Render if Feature Flag is Toggled Off */}
      {!flagValue && <p>Feature Flag is Toggled Off</p>}
    </div>
  );
}
