import "./App.css";

function App() {
  function Alert() {
    alert("Hello world");
  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={Alert}>Click Me</button>
    </div>
  );
}

export default App;
