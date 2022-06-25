import React from "react"
import instagramImg from "../../assets/img/instagram-logo.png"
import appleStoreImg from "../../assets/img/apple-button.png"
import playStoreImg from "../../assets/img/googleplay-button.png"
import { GrFacebook } from "react-icons/gr"
import { Link } from "react-router-dom"

function Login() {
    return (
        <div className="mr-36 md:mr-0 max-w-[300px]">
            <div className="w-[21.875rem] h-[24.71875rem] border-2 bg-[#FAFAFA] items-center flex flex-col">
                <img className="mx-auto my-8" src={instagramImg} />
                <input
                    className="w-[16.75rem] h-[1,875rem] pt-[9px] pr-0 pb-[7px] pl-2 bg-slate-100 border-[#dbdbdb] focus:outline-slate-400 border-[1px] rounded-sm mb-2 text-sm px-2 py-1"
                    type="email"
                    placeholder="Telefone, nome de usúario ou e-mail"
                />
                <input
                    className="w-[16.75rem] h-[1,875rem] pt-[9px] pr-0 pb-[7px] pl-2 bg-slate-100 border-[#dbdbdb] focus:outline-slate-400 border-[1px] rounded-sm mb-2 text-sm px-2 py-1"
                    type="password"
                    placeholder="Senha"
                />
                <button className="w-[16.75rem] h-[1,875rem] bg-[#B2DFFC] text-white focus:outline-gray-700 font-bold p-1 rounded-sm">
                    Entrar
                </button>
                <div className="flex items-center justify-center mt-3">
                    <hr className="w-24 h-[1px] bg-gray-400"></hr>
                    <p className=" mx-4">OU</p>
                    <hr className="w-24 h-[1px] bg-gray-400"></hr>
                </div>
                <div className="flex items-center justify-center">
                    <GrFacebook />
                    <p className="text-[#385185] font-bold m-3">
                        Entrar com o Facebook
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <p className="text-[rgb(56,81,133)] font-bold m-3">
                        Equeceu a senha?
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <p className="text-[#385185] font-bold m-3">
                    Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
                </p>
            </div>
            <div className="flex items-center justify-center">
                <p className="text-[#385185] font-bold m-3">
                    Obtenha o aplicativo
                </p>
            </div>
            <div className="flex items-center justify-center gap-3">
                <img className="w-[136px] h-[40px]" src={appleStoreImg} />
                <img className="w-[136px] h-[40px]" src={playStoreImg} />
            </div>
        </div>
    )
}

export default Login
