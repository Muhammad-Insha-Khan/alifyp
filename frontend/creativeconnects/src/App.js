import './App.css';
import  WelcomePage from './pages/Welcome';
import Registration from './pages/Registration';
import { Route, Routes } from 'react-router-dom';
import BuyerDashboard from './Buyer/BuyerDashboard';
import SellerDashboard from './Seller/SellerDashboard';
import ProtectedRoute from './ProtectedRoute';
import SkillSwapperDashboard from './Swapper/SkillSwapperDashboard';


function App() {
  return (
    <Routes>
    <Route path="/" element={< WelcomePage/>} />
    <Route path="/*" element={< h1>PAGE NOT FOUND</h1>} />
    <Route path="/register" element={<Registration />} />
  
    {/* BUYER ROUTING */}
  
    <Route path="/BuyerDashboard/:slug" element={<ProtectedRoute><BuyerDashboard></BuyerDashboard></ProtectedRoute>}/>
     
     {/* SKILLSWAPPER*/}
    <Route path="/SkillSwapper/:slug" element={<ProtectedRoute><SkillSwapperDashboard></SkillSwapperDashboard></ProtectedRoute>}/>

   
   {/* SELLER*/}
    <Route path="/SellerDashboard/:slug" element={<SellerDashboard/>}/>
  

    
   
  </Routes>
  );
}

export default App;

