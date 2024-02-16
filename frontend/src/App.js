
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import NavBar from './components/navbar';
import CreateNote from './components/CreateNote';
import Noteslist from './components/Noteslist';
import CreateUser from './components/CreateUser';
import RecoZones from './components/RecoZones';
import Calles from './components/Calles'
import Inicio from './components/Inicio'
function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <div className="content">
          <Routes>
          <Route path='/inicio' element={<Inicio/>}/>
            <Route path="/listareclamos" element={<Noteslist />} />
            <Route path="/edit/:id" element={<CreateNote />} />
            <Route path="/cargareclamos" element={<CreateNote />} />
            <Route path="/user" element={<CreateUser />} />
            <Route path='/zonasreco' element={<RecoZones/>}/>
            <Route path='/calles' element={<Calles/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
