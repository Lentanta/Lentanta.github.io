import { useEffect, useState, useContext } from 'react'
import { AppContext } from "./contexts/AppContext";

import axios from "axios";
import { useStore } from "@store";
import { tabs } from "@constants";

import DockLayout from "./layouts/DockLayout";
import InformationLayout from "./layouts/InformationLayout";
import OptionsLayout from "./layouts/OptionsLayout";

import './App.css'

function App() {
  const setGithubInfo = useStore((state: any) => state.setGithubInfo);

  const selectedTab = useStore((state: any) => state.selectedTab);
  const setSelectedTab = useStore((state: any) => state.setSelectedTab);

  const handleGetGithubInfo = async () => {
    try {
      const { data } = await axios.get("https://api.github.com/users/Lentanta");
      setGithubInfo(data);
      console.log("Fetch Github info successfully!") 
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleGetGithubInfo();
    document.body.style.backgroundImage = `url("/assets/png/catwall.jpg")`;
  }, [])

  return (
    <div className="App">
      <div className="dock-container">
        <DockLayout
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab} />
      </div>

      <div className="desktop">
        {selectedTab === tabs.INFORMATION && <InformationLayout />}
        {selectedTab === tabs.OPTIONS && <OptionsLayout />}
      </div>
    </div>
  )
}

export default App
