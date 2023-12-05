import { useState } from 'react';
import './App.css';
import Aboutme from './components/Aboutme';
import CircleContainer from './components/CircleContainer';
import Education from './components/Education';
import NavBar from './components/NavBar';
import Resume from './components/Resume';
import {
  BrowserRouter,
  Routes,Route
} from "react-router-dom";
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contactme from './components/Contactme';

function App() {
  const [showResume, setShowResume] = useState(true);
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    
      <Route exact path='/Portfolio' element= {<CircleContainer  setShowResume={setShowResume}/>}/>
      <Route exact path='/about me' element={<Aboutme  setShowResume={setShowResume}/>}/>
      <Route exact path='/education' element={<Education  setShowResume={setShowResume}/>}/>
      <Route exact path='/skills' element={<Skills  setShowResume={setShowResume}/>}/>
      <Route exact path='/projects' element={<Projects  setShowResume={setShowResume}/>}/>
      <Route exact path='/contact me' element={<Contactme  setShowResume={setShowResume}/>}/>
      
    </Routes>
    {showResume && <Resume/>}
    </BrowserRouter>
    </>
  );
}

export default App;
