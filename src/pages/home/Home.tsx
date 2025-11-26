

import ListaPostagens from "../../components/postagem/listapostagem/ListaPostagens"
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem"

function Home() {
    return (
        <>
            <div className="bg-linear-to-br from-indigo-500 via-sky-500 to-indigo-500 flex justify-center mt-10">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl'>
                            Expresse aqui seus pensamentos e opiniões
                        </p>

                        <div className="flex justify-around gap-4">
                            
                            <ModalPostagem />

                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://ik.imagekit.io/u0isfvxls/Blog%20pessoal/Jamila%20006%2037.jpg"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
            
            <ListaPostagens />
        </>
    )
}

export default Home
