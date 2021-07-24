import React from 'react';
import './style.css'
import { FiUserPlus, FiFilePlus } from 'react-icons/fi'
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div class="Container">
      <FiUserPlus size={48} color="#f8ad3e" />
      <Link to="/clientes">
        <button>Cadastrar Cliente</button>
      </Link>

      <FiFilePlus size={48} color="#f8ad3e" />
      <Link to="/produtos">
        <button>Cadastrar Produtos</button>
      </Link>
    </div>
  )
}

export default Menu;