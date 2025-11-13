import { FacebookLogoIcon, GifIcon, GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

function Footer() {

    return (
        <>
        <footer>
            <div className="bg-indigo-800 text-center ">
                <h1 className="text-white text-3xl font-bold">Blog Pessoal Generation | Copyright:2025</h1>
                <p className="text-white mt-2">Acesse nossas redes sociais</p>
                <div className="flex justify-center gap-4 mt-2">
                    <a href="https://www.linkedin.com/in/jamila-m-c/" className="text-white hover:underline">
                    <LinkedinLogoIcon size={32} color="white" weight="bold" />
                    </a>
                    <a href="https://github.com/jmcardoso18" className="text-white hover:underline">
                    <GithubLogoIcon size={32} color="white" weight="bold" />
                    </a>


                </div>
            </div>
        </footer>
        </>
    );
}
export default Footer;