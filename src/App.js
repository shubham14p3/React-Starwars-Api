import React, {useState, useEffect} from "react";
import Navbar from "./components/Navbar"
import Home from "./components/Home";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import {Container} from "semantic-ui-react";

function App() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    async function fetchpfilms() {
      let res = await fetch('https://swapi.dev/api/films/');
      let data = await res.json();
      setFilms(data.results);
    }
    fetchpfilms();
  }, []);
  console.log("data", films);
  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path="/">
              <Home data={films} />
            </Route>
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
