import { Container } from "react-bootstrap";
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoreDetails from "./components/MoreDetails";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<MovieList />} />
            <Route path="/DetailsMovie/:id" element={<MoreDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
