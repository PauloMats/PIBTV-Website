import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <Section title="Home" content="Welcome to my website!" />
            <Section title="About" content="About us page content here." />
            <Section title="Services" content="Details about our services." />
            <Section title="Contact" content="Contact us page content here." />
            <Footer />
        </div>
    );
};

export default App;
