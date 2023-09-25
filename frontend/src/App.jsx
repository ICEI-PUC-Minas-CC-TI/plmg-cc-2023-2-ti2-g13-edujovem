import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';

const App = () => {
  return (
    <BrowserRouter>
    
    <div className="relative z-0 bg-white text-black font-montserrat font-semibold">
      
      <Navbar/>
    </div>
    
    </BrowserRouter>
    
  )
}

export default App
