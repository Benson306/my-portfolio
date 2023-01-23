import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Education from './components/Education';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import {useRef} from 'react';

function App() {

  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);

  return (
    <Router>
    <div className="App bg-slate-900 text-white min-h-screen">
      <nav class="fixed bg-slate-900 top-0 z-50 w-full">
        <Navigation aboutRef={aboutRef} educationRef={educationRef} projectsRef={projectsRef} contactsRef={contactsRef} />
      </nav>
      <br /><br />
      <main class="pt-12">

      <Route exact path={["/","/#about","/#education","/#projects","/#contacts"]}>

        <About aboutRef={aboutRef} projectsRef={projectsRef} />
        <br />
        <Education educationRef={educationRef} />
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
