import logo from './logo.svg';
import './App.css';
import Addp from './components/Addp';
import DeletePic from './components/DeletePic';
import View from './components/View';

import Search from './components/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
    
<Routes>
  <Route path="/" element={<Addp/>}/>
  <Route path="/search" element={<Search/>}/>
  <Route path="/delete" element={<DeletePic/>}/>
  <Route path="/view" element={<View/>}/>
</Routes>

   
    
    </BrowserRouter>

  );
}

export default App;
