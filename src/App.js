import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Route, Routes} from "react-router-dom"
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Logout from './components/Logout';
import ProtectedRoute from './components/ProtectedRoute';
import { useEffect } from 'react';
import { useState } from 'react';
function App() {

  //check if user is logged in
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', {
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      });

      if( res.status === 200){
        setauth(true)
        setauth(false)
      }
      if( res.status === 401){
        setauth(false)
        setauth(true)
        
      }

    }catch (error){
      console.log(error)
    }
  }

  useEffect(()=>{
    isLoggedIn()
  }, []);

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <ProtectedRoute path="/Login" element={<Login/>} auth={auth} />
        <ProtectedRoute path="/dashboard" element={<Dashboard/>} auth={auth1} />
        <ProtectedRoute path="/Logout" element={<Logout/>} auth={auth1} />
      </Routes>
      <Footer/> 
    </>
    
  );
}
