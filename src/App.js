import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import DotGroup from "./components/DotGroup";
import useMediaQuery from "./hooks/useMediaQuery";
import Home from "./components/Home";
import Skills from "./components/Skills";
import LineGradient from "./components/LineGradient";
import Projects from "./components/Projects";

function App() {

  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
       <div className="w-5/6 mx-auto md:h-full">
        {isDesktop && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Home setSelectedPage={setSelectedPage} />
        </div>

        <LineGradient />
      <div className="w-5/6 mx-auto md:h-full ">
        <Skills />
        </div>

        <LineGradient />
      <div className="w-5/6 mx-auto">
          <Projects />
      </div>
       
    </div>
  );
}

export default App;
