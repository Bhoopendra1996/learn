// App.jsx
import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './assets/Login';

const App = () => {
  const [login, setLogin] = useState("");

  return (
    <>
    
       { login ? <BrowserRouter>
        <div className="flex flex-col h-screen">
          <header className=" bg-blue-950 text-stone-50 text-center fixed top-0 left-0 w-full z-10"> <Header /></header>
          <div className="flex flex-1">
            <aside className="bg-blue-950 text-slate-50 w-2/12  "><Sidebar /></aside>
            <main className=" bg-slate-300 flex-1 ">
              <Routes>
                <Route path='index' element={<Login/>} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
          </div>
          <footer className=" bg-blue-950 text-slate-50 text-center fixed bottom-0 left-0 w-full z-10"><Footer /></footer>
        </div>
      </BrowserRouter> : <div>
      <button
      onClick={(e) =>setLogin(true)}
      >
        click
      </button>
    </div>}
    </>
  );
};

export default App;
