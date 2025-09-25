import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      backgroundColor: '#f8f9fa',
      color: '#343a40',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{
        fontSize: '10rem',
        margin: 0,
        color: '#dc3545'
      }}>404</h1>
      <h2 style={{
        fontSize: '2rem',
        marginTop: '1rem'
      }}>Página Não Encontrada</h2>
      <p style={{
        fontSize: '1rem',
        maxWidth: '500px',
        margin: '1rem 0'
      }}>
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link to="/" style={{
        padding: '0.75rem 1.5rem',
        backgroundColor: '#007bff',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
        fontWeight: 'bold'
      }}>
        Voltar para a Página Inicial
      </Link>
    </div>
  );
};

export default NotFoundPage;
