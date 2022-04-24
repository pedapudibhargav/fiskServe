import React, { useEffect } from "react";
import "./App.css";
import AddDish from "./components/dishes/dish/AddDish";
import { useDispatch } from 'react-redux';
import { getDishes } from './actions/dishes.actions.js'
import Dishes from "./components/dishes/Dishes";

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
    <div className="App">
      <header className="App-header">
        {/* <p>{!data ? "Loading..." : data}</p> */}
      </header>
      <section>
        <Dishes></Dishes>
        <AddDish></AddDish>
      </section>
    </div>
  );
}

export default App;