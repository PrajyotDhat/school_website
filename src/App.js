

import './App.css';
import AboutUS from './components/AboutUS/AboutUS';
import ContactUS from './components/ContactUS/ContactUS';
import Nav from './components/Nav/Nav';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Header/>
        <Home/>
        <Routes>
          <Route exact path='/about' component={AboutUS}></Route>
          <Route exact path='/contact' component={ContactUS}></Route>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
