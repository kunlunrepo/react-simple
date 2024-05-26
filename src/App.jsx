import './App.css'


// 类组件
import React from "react";
import {Link, Route, Routes, BrowserRouter as Router, Navigate} from "react-router-dom";
import Home from "./components/Home/index.jsx";
import About from "./components/About/index.jsx";

class App extends React.Component {
   render() {
       return (
           <div className="all">
               <div>
                   <div className="link">
                       <Link to="/home">打开首页的页面</Link>
                   </div>
                   <div className="link">
                       <Link to="/about">打开关于的页面</Link>
                   </div>
               </div>
               <div className="view">
                   <Routes>
                       <Route path='/home' element={<Home />}></Route>
                       <Route path='/about' element={<About />}></Route>
                       {/*重定向*/}
                       <Route path='/' element={<Navigate to='/home'/>}></Route>
                   </Routes>
               </div>
           </div>
       )
   }
}

export default App
