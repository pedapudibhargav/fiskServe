import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import "./App.css";
import { getDishes } from './actions/dishes.actions.js'

import MainAppBar from "./components/app-menu/MainAppBar";
import Dishes from "./components/dishes/Dishes";
import AddDish from "./components/dishes/dish/AddDish";
import Menu from "./components/menu/Menu";
import CreateMenu from "./components/menu/createMenu/CreateMenu";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function App() {
  // const [data, setData] = React.useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDishes());
  }, [dispatch]);
  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message))
  //     .catch((error) => console.error(error.message));;
  // }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Router>
          <MainAppBar />
          <section>
            <p>App</p>

            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/dishes">Dishes</Link>
                  </li>
                  <li>
                    <Link to="/admin/menu/create">Create Menu</Link>
                  </li>
                </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Routes>
                <Route exact path="/admin/menu/create" element={<CreateMenu />}>
                </Route>
                <Route exact path="/admin/dishes/create" element={<AddDish />}>
                </Route>
                <Route exact path="/dishes" element={<Dishes />}>
                </Route>
                <Route exact path="/menu" element={<Menu />}>
                </Route>
                <Route path="/" element={<Menu />}>
                </Route>
              </Routes>
            </div>
          </section>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;