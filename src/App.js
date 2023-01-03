import Navbar from "./scenes/Navbar"
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing"

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const isAboveMeduimScreens = useMediaQuery("(min-width: 1060px)")
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollX !== 0) selectedPage(false);

    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  },[])
  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={selectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
          {isAboveMeduimScreens && (<DotGroup
            selectedPage = {selectedPage}
            setSelectedPage = {setSelectedPage}
          />)}
          <Landing setSelectedPage = {setSelectedPage} />
      </div>
    </div>
  );
}

export default App;
