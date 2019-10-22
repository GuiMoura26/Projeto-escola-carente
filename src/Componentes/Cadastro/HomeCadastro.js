import React from 'react'
import { Link } from 'react-router-dom';

import "../Cadastro/HomeCadastro.css"

const HomeCadastro = () => {
    return (


        <div>
            <div id='texto'>
                <h1>Cadastre-se como escola ou como doador</h1>
            </div>

            <div id='Voltar'>
                    <Link to="/">
                        <button>Volar</button>
                    </Link>
                </div>
            
            <div id='geral'>

                <div id='Escola'>
                    <Link to="/CadastroEscola">
                        <button>Escola</button>
                    </Link>
                </div>

                <div id='Doador'>
                    <Link to="/CadastroDoador">
                        <button>Doador</button>
                    </Link>
                </div>

                

            </div>
        </div>
    );
};
export default HomeCadastro;