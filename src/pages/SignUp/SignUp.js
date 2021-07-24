import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';
import logo from '../../assets/logo.svg';

function SignUp() {
  return (
    <div className="loginContainer">
    <section className="form">
        <div>
          <img src={logo} alt="cubo"/>
          <h1>Login</h1>
            <p>Sistema de Gestão de Cadastro</p>
          <input placeholder="Sua ID" />
        </div>
        <div className="buttons">
          <div className="menu">
            <Link to="/menu">
              <button className="enter">
              <FiLogIn size={16} color="#f8ad3e" />
              <span className="button-text">Entrar</span>
                </button>
            </Link>
          </div>
        </div>
    </section>
</div>
  );
}

export default SignUp;