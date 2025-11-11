function Home() {
  return (
    // Container
    <div
        style={{
            backgroundColor:"#312e81",
            display: "flex",
            justifyContent: "center"
        }}
    >      
    {/* Grid que divide a rela em duas colunas  */}
        <div
            style={{
                display:"grid",
                gridTemplateColumns: "1fr 1fr",
                color: "white",
                width: "100%",
                maxWidth: "1280px"
            }}
          >
           {/* Coluna esquerda */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "1rem",
                    paddingBottom: "1rem"
 
                }}>
                <h2> Seja bem vinde!</h2>
                <p> Expresse aqui seus pensamentos e opiniões</p>
                {/* Link/ botão */}
                <div>
                    <div>Nova Postagem </div>
                </div>
            </div>
 
            {/* Coluna direira */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                <img
                    src="https://i.imgur.com/fyfri1v.png"
                    alt="Imagem da Página Home"
                    style={{
                        width: "66%"
                    }}
 
                />
            </div>
       
 
        </div>
    </div>
  )
}
export default Home