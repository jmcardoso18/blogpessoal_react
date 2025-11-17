function Home() {
  return (
    <div className="bg-indigo-900 flex justify-center items-center min-h-screen px-8 py-12">
      {/* Grid com duas colunas */}
      <div className="container grid md:grid-cols-2 gap-8 text-white items-center">
        {/* Coluna da Esquerda */}
        <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
          <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
          <p className="text-xl">Expresse aqui seus pensamentos e opiniões</p>

          <div>
            <button className="rounded text-white border-white border-2 py-2 px-4 hover:bg-white hover:text-indigo-900 transition">
              Nova Postagem
            </button>
          </div>
        </div>

        {/* Coluna da Direita */}
        <div className="flex justify-center">
          <img
            src="https://ik.imagekit.io/u0isfvxls/portf%C3%B3lio/Portf.png?updatedAt=1762812965492"
            alt="Imagem da Página Home"
            className="w-2/3 max-w-sm"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
