import React, { useState } from "react";
import InterfacePanel from "./components/InterfacePanel.js";

// Notes: The interface panel uses a total of 20vh of the screen
function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return <InterfacePanel isPlaying={isPlaying} setIsPlaying={setIsPlaying} />;
}

export default App;
