import React from 'react';
import './App.css';
import Nav from './components/navigation/Nav';
import Banner from './components/banner/Banner';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Services from './components/services/Services';
import RecentBlock from './components/recentBlock/RecentBlock';
import Clients from './components/clients/Clients';
import Connect from './components/connect/Connect';
import Tools from './components/tools/Tools';
import Solution from './components/solution/Solution';
import Testimonials from './components/testimonials/Testimonials';
import Members from './components/members/Members';

function App() {
  return (
    <div className="App">
      
      <Nav />
      <Banner />
      <About />
      <Services />
      <RecentBlock />
      <Clients />
      <Testimonials />
      <Solution />
      <Members />
      <Tools />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
