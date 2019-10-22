import React from "react";
import { Link } from 'react-router-dom';
import './home.css'

const Home = () => {

  return (
    <div className="Home">
      <nav className='navCaixa'>
        <strong>Passa pra frente</strong>

        <div id='ancoras'>
          <div>
          <Link to="/Cadastre-se">
            <a>Cadastre-se</a>
          </Link>
          </div>

          <div>
            <Link to="/">
              <a>Login</a>
            </Link>
          </div>

          <div>
            <Link to="/">
              <a>Home</a>
            </Link>
          </div>
        </div>

      </nav>
    </div>




  );
};
export default Home;








{/* <aside className='asideCaixa'>
        <div className='Texto1'>
          <p>Oi, Eu queria agradecer a vc por</p> 
          <p>estar ajudando as escolas</p>
        </div>

        <div className='Texto2'>
          <p>Sei la mais oque ponho</p>
          <p>nessa jossa</p>
        </div>

        <div className='Texto3'>
          <p>hAAAAAAAAAAAAAAAAAA</p> 
          <p>socorro!!!!!!!</p>
        </div>
      </aside>

      <footer className='footerCaixa'>
        <div>
          <button>DOE AGR PORRA AH</button>
          <img src={Doacao} alt="Doação" />
          <a href="">Sou uma escola carente</a>
        </div>
      </footer>

      <header>
        <h1>CONTATO</h1>
      </header>

    < */}