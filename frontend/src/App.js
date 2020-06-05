import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/index'
import Header from './components/Header/index'
import Routes from './routes';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes />
            <Footer />
        </BrowserRouter>
    );
}

export default App;