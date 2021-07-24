import React, {useState} from 'react';
import './style.css';

function Clientes() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cpf, setCpf] = useState('');
  const [cadastro, setCadastro] = useState(false);

  function handleSubmit() {
    const dadosCliente = {
      nome,
      email,
      endereco,
      cpf
    };
    localStorage.setItem('@data-user', JSON.stringify(dadosCliente));
    setNome("");
    setEmail("");
    setEndereco("");
    setCpf("");
    setCadastro(true); 
  }

  if (cadastro) {
    return (
      <div class="return">Cliente Cadastrado com Sucesso!</div>
    )
  }

  return (
    <div id="container">
        <div className="content">
            <h1 className="title-cadastro">Cadastro do Cliente</h1>
            <div className="cadastro-clientes">
                <p className="title-input">Nome do Cliente</p>
                <input
                  placeholder="digite o nome"
                  className="input"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
                <p className="title-input">E-mail</p>
                <input
                  type="email"
                  placeholder="digite o e-mail"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className="title-input">Endereço</p>
                <input
                  type="endereço"
                  placeholder="digite o endereço"
                  className="input"
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                />
                <p className="title-input">CPF</p>
                <input
                  type="cpf"
                  placeholder="digite o cpf"
                  className="input"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
            </div>
            <div className="button-submit">
              <button onClick={handleSubmit}>
                Cadastrar Dados
              </button>
            </div>
        </div>
    </div>
  )
}
export default Clientes;