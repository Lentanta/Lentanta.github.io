import { useEffect, useState, useContext } from 'react'
import { AppContext } from "./contexts/AppContext";

import Dock from "./components/Dock";
import InformationLayout from "./layouts/InformationLayout";
import OptionsLayout from "./layouts/OptionsLayout";

import './App.css'

function App() {
  const appContext = useContext(AppContext);

  const [selectedTab, setSelectedTab] = useState("github");
  const [siteOptions, setSiteOptions] = useState(appContext);

  useEffect(() => {
    document.body.style.backgroundImage = `url("/assets/png/catwall.jpg")`;
  }, [])

  return (
    <AppContext.Provider value={siteOptions}>
      <div className="App">
        <div className="dock-container">
          <Dock
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab} />
        </div>

        <div className="desktop">
          {selectedTab === "github" && <InformationLayout />}
          {selectedTab === "options" && <OptionsLayout setSiteOptions={setSiteOptions} />}

        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App
