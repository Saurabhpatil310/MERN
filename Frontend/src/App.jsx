import React from "react"
import { Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import Courses from "./components/Courses/Courses";
import Signup from "./components/Signup";
import Contact from "./components/Contact/Contact";


export default function App() {
  return (
   <>
 <Routes>
  <Route path='/'element={<Home/>} />
  <Route path ='/course' element={< Courses/>}/>
  <Route path ='/signup' element={<Signup/>} />
  <Route path ='/contact' element={<Contact/>}/>
 </Routes>
  </>
  )
}
