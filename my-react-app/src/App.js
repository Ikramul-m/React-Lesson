import { useState } from "react";
import "./App.css";
import "./Student";

function App() {
  const [data, setData] = useState(0);
  function updateData() {
    setData(data + 1);
    // alert("Data updated successfully")
  }

  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={updateData}>Update</button>
    </div>
  );
}

export default App;
