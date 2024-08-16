import Navbar from './components/Navbar';
import Intro from  './components/Intro';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Achievements from './components/Achievements';
import About from './components/About';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Intro/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/resume' element={<Resume/>} />
          <Route path='/achievements' element={<Achievements/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
