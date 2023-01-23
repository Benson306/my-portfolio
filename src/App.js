import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Education from './components/Education';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import {useRef} from 'react';
import Experience from './components/Experience';
import { Link } from "react-router-dom"
import file from './images/CV.docx';

function App() {

  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);


  const onDownload = () => {
    fetch(file).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "CV.docx";
        a.click();
      });
    });
  };


  return (
    <Router>
    <div className="App bg-slate-900 text-white min-h-screen">
      <nav class="fixed bg-slate-900 top-0 z-50 w-full">
        <Navigation aboutRef={aboutRef} educationRef={educationRef} projectsRef={projectsRef} contactsRef={contactsRef} experienceRef={experienceRef} />
      </nav>
      <br /><br />
      <main class="pt-12">

      <Route exact path={["/","/#about","/#education", "/#skills" ,"/#experience","/#projects","/#contacts"]}>

        <About aboutRef={aboutRef} projectsRef={projectsRef} />
        <br />
        <Education educationRef={educationRef} />
        <br />
        <Experience experienceRef={experienceRef} />
        <br />
        <center>
          <Link to="" onClick={onDownload} class="bg-lime-600 text-white p-4 hover:bg-lime-500 text-center shadow-xl">Download CV</Link>
        </center>
        <br />
        <Projects projectsRef={projectsRef} />
        <br />
        <Contacts contactsRef={contactsRef} />

      </Route>

      </main>

    </div>
    </Router>
  );
}

export default App;
