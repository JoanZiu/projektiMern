import React from 'react';
import './App.css';
import Navigation from './Navigation';
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footeri from './Footeri';
import CreateItem from './CreateItem';
import ReadAllItem from './ReadAllItem';
import ReadOneItem from './ReadOneItem';
import UpdateItem from './UpdateItem';
import BestYears from './BestYears';
import DreamTeam from './DreamTeam';
import Foundation from './Foundation';
import BarcaChamps from './BarcaChamps';
import BarcaFifthCLWin from './FifthUcl';
import CreateHonour from './CreateHonour';
import ReadAllHonour from './ReadAllHonour';
import Honours from './Honours';
import UpdateHonour from './UpdateHonour';
import ReadOneHonour from './ReadOneHonour';
import SearchResults from './SearchResults';

function App() {
  return (
    <div>
      
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About/" element={<About />} />
        <Route path="/Honours/" element={<Honours />} />
        <Route path="/Contact/" element={<Contact />} />
        <Route path="/best-years" element={<BestYears />} />
        <Route path="/dream-team" element={<DreamTeam />} />
        <Route path="/foundation" element={<Foundation />}/>
        <Route path="/champs" element={<BarcaChamps />}/>
        <Route path="/ucl" element={<BarcaFifthCLWin/>}/>
<Route path="/search" element={<SearchResults />} />

        {/* CRUD */}
        <Route path="/createItem/" element={<CreateItem/>} />
        <Route path="/readAllItem/" element={<ReadAllItem/>} />
        <Route path="/readOneItem/:id" element={<ReadOneItem/>} />
        <Route path="/updateItem/" element={<UpdateItem/>} />
        <Route path="/createHonour/" element={<CreateHonour/>} />
         <Route path="/readAllHonour/" element={<ReadAllHonour/>} /> 
        <Route path="/readOneHonour/:id" element={<ReadOneHonour/>} />
        <Route path="/updateHonour/:id" element={<UpdateHonour/>} />       
       </Routes>
      <Footeri />
    </div>
    
  );
}

export default App;
