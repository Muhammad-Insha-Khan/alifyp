import './App.css';
import  WelcomePage from './pages/Welcome';
import Registration from './pages/Registration';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
    <Route path="/" element={< WelcomePage/>} />
    <Route path="/register" element={<Registration />} />
   
  </Routes>
  );
}

export default App;

