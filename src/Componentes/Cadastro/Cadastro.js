import React, { useState, useEffect } from "react";
import Input from "../Input";
import { Link } from 'react-router-dom';

import "./Cadastro.scss";
import Botao from "../Botao/Botao";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [id, setId] = useState(1);
  const [count, setCount] = useState(1);
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState();

  const resposta = texto => {
    setMensagem(texto);
    setTimeout(() => {
      setMensagem("")
    }, 1500);
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (email === confirmEmail) {
      const payload = {
        name: nome,
        email: email,
        confirm_email: confirmEmail,
        password: senha
      }
      localStorage.setItem(`Dados${count}`, JSON.stringify(payload));
      setCount(count + 1);

      setNome("");
      setEmail("");
      setConfirmEmail("");
      setSenha("");
      resposta("Cadastrado com sucesso")
      setStatus(true)

    } else {
      resposta("Os emails não correspondem");
      setStatus(false);
    }
  };

  return (
    <div className="Cadastro">
      <h1>Faça seu cadastro da sua  Escola</h1>
      <p>{mensagem}</p>
      <form onSubmit={handleSubmit}>
        <Input
          value={nome}
          type="text"
          label="Nome"
          placeholder="Nome completo"
          atualizarState={setNome}
        />
        <Input
          value={email}
          type="email"
          label="Email"
          placeholder="Digite seu email"
          atualizarState={setEmail}
        />
        <Input
          value={confirmEmail}
          type="email"
          label="Confirmar Email"
          placeholder="Confirme seu email"
          atualizarState={setConfirmEmail}
          obrigatorio
        />
        <Input
          value={senha}
          type="password"
          label="Senha"
          placeholder="Digite sua senha"
          atualizarState={setSenha}
        />
        <Botao>Cadastrar</Botao>
      </form>

      <div id='Voltar'>
        <Link to="/Cadastre-se">
          <button>Voltar</button>
        </Link>
      </div>
    </div>
  );
};

export default Cadastro;
