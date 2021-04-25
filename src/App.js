import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Skills from "./Skills";
import { ProjectList } from "./Projects/ProjectList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Home />
        <Skills />
        <ProjectList />
      </div>
    </div>
  );
}

export default App;
