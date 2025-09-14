
import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import AboutMe from '../Components/AboutMe';
import Skills from '../Components/Skills';
import Work from '../Components/Work';
import Socials from '../Components/Socials';
import Portfolio from '../Components/Portfolio';
import Footer from '../Components/Footer'
import Contact from '../Components/Contact'


function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <AboutMe/>
      <Work/>
      <Portfolio/>
      <Footer/>
      <Socials/>
    </div>
  );
}

export default App;

