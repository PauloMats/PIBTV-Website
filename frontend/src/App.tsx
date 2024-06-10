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
            <Section title="Home" content="Bem Vindo ao site da PIBTV!" />
            <Section title="About" content="Saiba mais aqui, em breve." />
            <Section title="Services" content="Mais detalhes aqui em breve" />
            <Section title="Contact" content="Entre em contato connosco" />
            <Footer />
        </div>
    );
};

export default App;
