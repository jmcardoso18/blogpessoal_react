
import type UsuarioLogin from "../models/UsuarioLogin";
import { createContext, useState } from "react";
import { login } from "../services/Service";

interface AuthContextProps{
    usuario: UsuarioLogin
    handleLogout: () => void
    handleLogin: (usuarioLogin: UsuarioLogin) => void
    isLoading: boolean
}

interface AuthProviderProps{
    // qualquer componente react pode utilizar
    children: React.ReactNode
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({children}: AuthProviderProps){

//inicializa o estado do usuário (guardar dados do usuario autenticado)
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: ''
    })
    //inicializa o estado de carregamento(loading)
    const [isLoading, setIsLoading] = useState<boolean>(false);

    //função para logar o usuário
    async function handleLogin(usuarioLogin: UsuarioLogin){
        setIsLoading(true);
        try{
            //chamar o serviço de login
            await login(`/usuarios/logar`, usuarioLogin, setUsuario);
            alert('Usuário logado com sucesso!');

        }catch(error){
            alert('Erro ao logar o usuário! Verifique as credenciais.');
        }
        setIsLoading(false);
    }
    
    function handleLogout(){
        setUsuario({
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: ''
        });
        alert('Usuário deslogado com sucesso!');
    }

    return(
        <AuthContext.Provider value={{usuario, handleLogout, handleLogin, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}