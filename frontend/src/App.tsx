import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <Section title="Cadastro" content={<Form />} />
            <Footer />
        </div>
    );
};

export default App;
