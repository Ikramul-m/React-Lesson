import { useState } from "react";
import "./App.css";

function App() {

  const [data,setData] = useState("ikram")
  function updateData(){
    setData("Haque")
  }

  return (
    <div className="App">
      <h1>{data}</h1>
      <h1>Hello World</h1>
      <button onClick={updateData}>Click Me</button>
    </div>
  );
}

export default App;
