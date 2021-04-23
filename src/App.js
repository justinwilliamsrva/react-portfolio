import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Skills from "./Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Home />
        <Skills />
      </div>
    </div>
  );
}

export default App;
