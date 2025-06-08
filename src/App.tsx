import { useEffect } from "react";
import Footer from "./components/elements/Footer"
import Navbar from "./components/elements/Navbar"
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";

const App = () => {
  const { darkMode } = useSelector((state: RootState) => state.darkMode);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <>
    <Navbar />

    <main className="flex flex-col gap-y-20 md:gap-y-32 overflow:hidden">
      
    </main>

    <Footer />
    </>
  )
}

export default App