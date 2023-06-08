
import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Component/home';
import Navbar from './Component/navbar';
// import Navbar from './Component/navbar';
import Student from './Component/student';
import Contact from './Component/contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}> </Route>
            <Route path='/student' element={<Student />}></Route>
            <Route path='/contact' element={<Contact/>}></Route>

         
        </Routes>
        
      
      </BrowserRouter>
      

      

    
    </div>
  );
}

export default App;
