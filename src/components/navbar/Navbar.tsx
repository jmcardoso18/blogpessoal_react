import { Link } from "react-router-dom";

function Navbar() {

    return (
        <>
            <div className="w-full bg-indigo-800 p-4 justify-between text-lg">
                <div className="container flex justify-between text-lg mx-8">
                    <Link to="/home" className="text-2xl font-bold text-white">Blog Pessoal</Link>

                    <nav className="mt-2">
                        < ul className="flex gap-4">
                            <li>
                                <a href="/" className="text-white hover:underline">Postagens</a>
                            </li>
                            <li>
                                <a href="/" className="text-white hover:underline">Temas</a>
                            </li>
                            <li>
                                <a href="/" className="text-white hover:underline">Cadastrar Tema</a>
                            </li>
                            <li>
                                <a href="/" className="text-white hover:underline">Perfil</a>
                            </li>
                            <li>
                                <a href="/" className="text-white hover:underline">Sair</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}
export default Navbar;
