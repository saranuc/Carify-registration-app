
import React from 'react'
import './App.css';
import Landing from './login';
import Signup from './signup';
import Home from './home';
import Sub from './sub';
import Gal from './gal';
import Lis from './list';
import reg from './regis';
import UpdateForm from './update';
import RegisterForm from './regis';
import Info from './info';

import { BrowserRouter, Routes,Route} from 'react-router-dom';
import List from './list';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="up" element={<Signup/>}/>
        <Route path="in" element={<Landing/>}/>
        <Route path="sub" element={<Sub/>}/>
        <Route path="gal" element={<Gal/>}/>
        <Route path="list" element={<List/>}/>
        <Route path="but" element={<RegisterForm />}/>
        <Route exact path="/u/:username" element={<UpdateForm/>}/>
        <Route exact path="/s/:username" element={<Info/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
