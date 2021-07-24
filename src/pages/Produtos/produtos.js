import React, {useState} from 'react';
import './style.css'

function Produtos() {
  const [produto, setProduto] = useState('');
  const [tipo, setTipo] = useState('');
  const [caracteristicas, setCaracteristicas] = useState('');
  const [preco, setPreco] = useState('');
  const [valorVenda, setValorVenda] = useState('');
  const [estoque, setEstoque] = useState('');
  const [cadastro, setCadastro] = useState(false);

  function handleSubmit() {
    const dadosProduto = {
      produto,
      tipo,
      caracteristicas,
      preco,
      valorVenda,
      estoque
    };
    localStorage.setItem('@data-user', JSON.stringify(dadosProduto));
    setProduto("");
    setTipo("");
    setCaracteristicas("");
    setPreco("");
    setValorVenda("");
    setEstoque("");
    setCadastro(true); 
  }

  if (cadastro) {
    return (
      <div class="return">Produto Cadastrado!</div>
    )
  }

  return (
    <div id="container">
      <div className="content">
          <h1 className="title-cadastro">Cadastro de Produto</h1>
          <div className="cadastro-produto">
              <p className="title-input">Nome do produto</p>
              <input
                placeholder="nome do produto"
                className="input"
                value={produto}
                onChange={(e) => setProduto(e.target.value)}
              />
              <p className="title-input">Tipo</p>
              <input
                type="tipo"
                placeholder="digite o tipo"
                className="input"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
              />
              <p className="title-input">Características</p>
              <input
                type="características"
                placeholder="digite as características"
                className="input"
                value={caracteristicas}
                onChange={(e) => setCaracteristicas(e.target.value)}
              />
              <p className="title-input">Preço</p>
              <input
                type="preço"
                placeholder="digite o preço"
                className="input"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
              />
              <p className="title-input">Valor de Venda</p>
              <input
                type="valorVenda"
                placeholder="digite o valor de venda"
                className="input"
                value={valorVenda}
                onChange={(e) => setValorVenda(e.target.value)}
              />
              <p className="title-input">Estoque</p>
              <input
                type="estoque"
                placeholder="digite a quantidade em estoque"
                className="input"
                value={estoque}
                onChange={(e) => setEstoque(e.target.value)}
              />
          </div>
              <button onClick={handleSubmit}>
                Salvar Produto
              </button>

      </div> 
    </div>
  )
}
export default Produtos;