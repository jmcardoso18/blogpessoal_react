import { useContext, useState, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const {usuario, handleLogout } = useContext(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false);

  function logout() {
    handleLogout();
    navigate("/");
  }

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
      <nav className="fixed top-0 left-0 w-full z-50 bg-linear-to-br from-indigo-500 via-sky-500 to-indigo-500 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link to="/home" className="text-2xl font-bold">
            Blog Pessoal
          </Link>

          {/* Menu Desktop */}
          <ul className="hidden lg:flex gap-6 items-center text-lg">
            <li><Link to="/postagens" className="hover:underline">Postagens</Link></li>
            <li><Link to="/temas" className="hover:underline">Temas</Link></li>
            <li><Link to="/cadastrartema" className="hover:underline">Cadastrar tema</Link></li>
            <li><Link to="/perfil" className="hover:underline">Perfil</Link></li>
            <li>
              <button onClick={logout} className="hover:underline">Sair</button>
            </li>
          </ul>

          {/* Botão Mobile sem ícone */}
          <button 
            className="lg:hidden text-lg font-semibold"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Fechar" : "Menu"}
          </button>
        </div>

        {/* Menu Mobile */}
        <div 
          className={`lg:hidden bg-sky-800 transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-4 px-6 text-lg">
            <li><Link to='/postagens' className='hover:underline'>Postagens</Link></li>
            <li><Link to="/temas" onClick={() => setMenuOpen(false)}>Temas</Link></li>
            <li><Link to="/cadastrartema" onClick={() => setMenuOpen(false)}>Cadastrar tema</Link></li>
            <li><Link to='/perfil' className="hover:underline">Perfil</Link></li>
            <li>
              <button onClick={logout} className="text-left">
                Sair
              </button>
            </li>
          </ul>
        </div>
      </nav>

    )
  } 

  return (
    <>
      {component}
    </>
  );
}

export default Navbar;
