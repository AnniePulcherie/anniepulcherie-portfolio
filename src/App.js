
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Menu  from './components/Menu';
import Profile from './components/Profile';
import Contact from './components/Contact';
import "./App.css"
import About from './components/About';
import Services from './components/Services';
function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path='/' element={<Profile />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
      <footer>
	        <p>Copyright 2020 Annie Pulcherie - Toute reproduction interdite</p>
      </footer>
    </div>
  );
}

export default App;
