import { useContext, useEffect, useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import type UsuarioLogin from "../../models/UsuarioLogin";
import { AuthContext } from "../../contexts/AuthContext";
import { ClipLoader } from "react-spinners";

function Login() {

  const navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  // ESTADO DOS ERROS
  const [erros, setErros] = useState({
    usuario: "",
    senha: "",
  });
  
  useEffect(() => {
    if (usuario.token !== '') {
      navigate('/home');
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    })

  }

  function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (

    <>

      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen overflow-hidden">

        {/* Coluna do formulário */}
        <div className="flex justify-center items-center p-8">
          <form
            className="flex flex-col w-full max-w-sm mx-auto gap-4 bg-sky-200 p-8 rounded-xl shadow-md"
            onSubmit={login}
          >
            <h2 className="text-slate-900 text-5x1 font-bold text-center">Entrar</h2>

            <div className="flex flex-col w-full ">
              <label htmlFor="usuario">Usuário</label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuario"
                className="border-2 border-slate-700 rounded p-2 bg-white"
                value={usuarioLogin.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="border-2 border-slate-700 rounded p-2 bg-white"
                value={usuarioLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>

            <button
              type='submit'
              className='rounded text-white bg-sky-400 hover:bg-indigo-900 
                   w-1/2 py-2 flex justify-center text-center mx-auto'
            >
              {isLoading ?
                <ClipLoader color="#ffffff" size={24} /> :
                <span>Entrar</span>
              }
            </button>

            <hr className="border-slate-800 w-full" />

            <p className="text-center">
              Ainda não tem uma conta?{' '}
              <Link to="/cadastro" className="text-indigo-800 hover:underline">
                Cadastre-se
              </Link>
            </p>
          </form>
        </div>

        {/* Coluna da imagem */}
        <div className="hidden lg:block w-full h-full overflow-hidden">
          <img
            src="https://ik.imagekit.io/u0isfvxls/Blog%20pessoal/foguete-espacial-moderno-com-design-plano_23-2147902183.avif?updatedAt=1763121545271"
            className="w-full h-full object-cover object-center"
            alt="Foguete"
          />
        </div>

      </div>

    </>
  );
}
export default Login;