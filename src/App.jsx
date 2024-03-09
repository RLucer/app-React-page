import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Movie } from "./pages/Movie.jsx";
import { NavBar } from "./components/NavBar.jsx";



function App() {
  return (
    <>

      <NavBar />
      <Routes>
        <Route path="/app-React-page/" element={<Home />}></Route>
        <Route path="/app-React-page/Movie" element={<Movie />}></Route>
       
        <Route path="/app-React-page/*" element={<Navigate to={"/app-React-page/"} />} ></Route>
      </Routes>
    
    </>
  );
}

export default App;
