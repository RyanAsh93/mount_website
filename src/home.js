import React from 'react';
import './cssStyles/homeStyle.css'
import Header from './components/header'
import Navbar from './components/navbar'
import Footer from './components/footer'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
      <Header />
      <Footer />
      </div>
    )
  }
}

export default Home;
