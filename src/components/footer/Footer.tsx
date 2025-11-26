import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { useContext, type ReactNode } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Footer() {
  let data = new Date().getFullYear()

  const { usuario } = useContext(AuthContext)

  let component: ReactNode

  if (usuario.token !== "") {

    component = (
      <footer className="bg-linear-to-br from-indigo-500 via-sky-500 to-indigo-500 text-center p-4 mt-auto">
        <h1 className="text-white text-3xl font-bold">
          Blog Pessoal Generation | Copyright:{data}
        </h1>
        <p className="text-white mt-2">Acesse nossas redes sociais</p>
        <div className="flex justify-center gap-4 mt-2">
          <a
            href="https://www.linkedin.com/in/jamila-m-c/"
            className="text-white hover:underline"
          >
            <LinkedinLogoIcon size={32} color="white" weight="bold" />
          </a>
          <a
            href="https://github.com/jmcardoso18"
            className="text-white hover:underline"
          >
            <GithubLogoIcon size={32} color="white" weight="bold" />
          </a>
        </div>
      </footer>
    )

    return (
      <>
        {component}
      </>
    )
  }
}
export default Footer