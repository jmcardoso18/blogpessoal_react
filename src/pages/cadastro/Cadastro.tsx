import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";

function Cadastro() {

  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [confirmarSenha, setConfirmarSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  })

  // ESTADOS DE ERRO POR CAMPO
  const [erros, setErros] = useState({
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
    confirmarSenha: "",
  })

  // --- VALIDADORES POR CAMPO ---
  function validarCampo(nomeCampo: string, valor: string) {
    const novosErros = { ...erros }

    switch (nomeCampo) {
      case "nome":
        novosErros.nome = valor.trim() ? "" : "O nome é obrigatório."
        break

      case "usuario":
        if (!valor) {
          novosErros.usuario = "O e-mail é obrigatório."
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
          novosErros.usuario = "Informe um e-mail válido."
        } else {
          novosErros.usuario = ""
        }
        break
      case "foto":
      if (valor.length > 5000)
          novosErros.foto = "Endereço da foto é muito longo."
        else novosErros.foto = ""
        break

      case "senha":
        if (!valor) novosErros.senha = "A senha é obrigatória."
        else if (valor.length < 8)
          novosErros.senha = "A senha deve ter no mínimo 8 caracteres."
        else novosErros.senha = ""
        break

      case "confirmarSenha":
        novosErros.confirmarSenha =
          valor === usuario.senha ? "" : "As senhas não conferem."
        break
    }

    setErros(novosErros)
  }

  // ATUALIZAR CAMPOS
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target

    setUsuario({
      ...usuario,
      [name]: value,
    })

    validarCampo(name, value)
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    const valor = e.target.value
    setConfirmarSenha(valor)
    validarCampo("confirmarSenha", valor)
  }

  // ENVIO DO FORMULÁRIO
  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const existeErro = Object.values(erros).some((msg) => msg !== "")
    const camposVazios = !usuario.nome || !usuario.usuario || !usuario.senha

    if (existeErro || camposVazios) {
      alert("Existem erros no formulário. Corrija antes de continuar.")
      return
    }

    setIsLoading(true)

    try {
      await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
      alert("Usuário cadastrado com sucesso!")
      navigate("/")
    } catch (error) {
      alert("Erro ao cadastrar o usuário!")
    }

    setIsLoading(false)
  }

  function retornar() {
    navigate("/")
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
      <div
        className="bg-[url('https://i.imgur.com/ZZFAmzo.jpg')] lg:block hidden bg-no-repeat 
          w-full min-h-screen bg-cover bg-center"
      ></div>

      <form className="flex justify-center items-center flex-col w-2/3 gap-3"
        onSubmit={cadastrarNovoUsuario}>

        <h2 className="text-slate-900 text-4xl">Cadastrar Novo Usuário</h2>

        {/* NOME */}
        <div className="flex flex-col w-full">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome"
            className="border-2 border-slate-700 rounded p-2"
            value={usuario.nome}
            onChange={atualizarEstado}
          />
          {erros.nome && <p className="text-red-600 text-sm">{erros.nome}</p>}
        </div>

        {/* USUARIO */}
        <div className="flex flex-col w-full">
          <label htmlFor="usuario">Usuário</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            placeholder="Usuário"
            className="border-2 border-slate-700 rounded p-2"
            value={usuario.usuario}
            onChange={atualizarEstado}
          />
          {erros.usuario && (
            <p className="text-red-600 text-sm">{erros.usuario}</p>
          )}
        </div>

        {/* FOTO */}
        <div className="flex flex-col w-full">
          <label htmlFor="foto">Foto</label>
          <input
            type="text"
            id="foto"
            name="foto"
            placeholder="URL da Foto"
            className="border-2 border-slate-700 rounded p-2"
            value={usuario.foto}
            onChange={atualizarEstado}
          />
          {erros.foto && <p className="text-red-600 text-sm">{erros.foto}</p>}
        </div>

        {/* SENHA */}
        <div className="flex flex-col w-full">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            className="border-2 border-slate-700 rounded p-2"
            value={usuario.senha}
            onChange={atualizarEstado}
          />
          {erros.senha && <p className="text-red-600 text-sm">{erros.senha}</p>}
        </div>

        {/* CONFIRMAR SENHA */}
        <div className="flex flex-col w-full">
          <label htmlFor="confirmarSenha">Confirmar Senha</label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            placeholder="Confirmar Senha"
            className="border-2 border-slate-700 rounded p-2"
            value={confirmarSenha}
            onChange={handleConfirmarSenha}
          />
          {erros.confirmarSenha && (
            <p className="text-red-600 text-sm">{erros.confirmarSenha}</p>
          )}
        </div>

        {/* BOTÕES */}
        <div className="flex justify-around w-full gap-8">
          <button
            type="reset"
            className="rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2"
            onClick={retornar}
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="rounded text-white bg-indigo-400 hover:bg-indigo-900 w-1/2 py-2 flex justify-center"
          >
            {isLoading ? (
              <ClipLoader color="#ffffff" size={24} />
            ) : (
              <span>Cadastrar</span>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Cadastro
