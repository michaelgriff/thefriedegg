import "./App.css";
import LandingPage from "./pages/LandingPage";
import Events from "./pages/Events";
import { useState } from "react";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [eventClicked, setEventClicked] = useState({});
  return (
    <div className="App">
      {isClicked ? (
        <Events setIsClicked={setIsClicked} eventClicked={eventClicked} />
      ) : (
        <LandingPage
          setIsClicked={setIsClicked}
          setEventClicked={setEventClicked}
        />
      )}
    </div>
  );
}

export default App;
