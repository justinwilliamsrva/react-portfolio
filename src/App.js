import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Skills from "./Skills";
import { ProjectList } from "./Projects/ProjectList";
import Music from "./Music/Music";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Home />
        <Skills />
        <ProjectList />
        <Music />
        {/* <ContactForm /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
