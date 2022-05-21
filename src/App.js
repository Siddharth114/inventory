import "./App.css";
import Info from "./info.js";

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem text='default' number={2}/>
      <AddItem text='another default' number={2}/>
    </div>
  );
}

function AddItem(props) {

  return (
    <form>
      <label for="text-form">Type something: </label>
      <input type="text" value={props.text} id="text-form" />
    </form>
  );
}

export default App;
