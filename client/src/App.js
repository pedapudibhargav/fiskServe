import React from "react";
import "./App.css";
import AddDish from "./components/dishes/dish/AddDish";
function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((error) => console.error(error.message));;
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
      </header>
      <section>
        <AddDish></AddDish>
      </section>
    </div>
  );
}

export default App;