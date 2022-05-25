import React from 'react';

export const Navbar:React.FC = () => {
  return (
    <div className='mt-5 p-2'>
      <nav className="nav flex-column">
        <a className="nav-link text-dark" href="/">Inicio</a>
        <a className="nav-link text-dark" href="/cadastro">Cadastro</a>
        <a className="nav-link text-dark" href="/gestao">Gestão</a>
      </nav>
    </div>
  );
}
