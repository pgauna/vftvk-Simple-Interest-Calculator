
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, BrowserRouter } from 'react-router-dom';
import Layout from './componentes/layout/Layout';
import './app.css'

function App() {
    // Recuperar el estado de autenticación desde localStorage
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem('isLoggedIn') === 'true' // Convierte la cadena "true" a booleano
    );

    // Guardar el estado de autenticación en localStorage cada vez que cambie
    useEffect(() => {
        localStorage.setItem('isLoggedIn', isLoggedIn);
    }, [isLoggedIn]);

    // Función para manejar el login exitoso
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <BrowserRouter>
            <Layout isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
        </BrowserRouter>
    );
}

export default App;