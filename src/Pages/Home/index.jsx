import React from "react"
import { BsLinkedin } from "react-icons/bs"
import Login from "../../Components/Login"
import PhoneIcon from "../../Components/PhoneIcon"

function Home() {
    return (
        <div className="w-screen h-screen">
            <div className="justify-center items-center bg-[#fafafa] flex">
                <PhoneIcon />
                <Login />
            </div>
            <div className="flex justify-center bg-[#fafafa]">
                <footer
                    className="flex item-center text-center p-4 
          text-[#385185] gap-1"
                >
                    Made by Felipe Noguez
                    <a
                        className="flex items-center"
                        href="https://www.linkedin.com/in/luiz-felipe-noguez-da-silva/"
                        target="_blank"
                    >
                        <BsLinkedin />
                    </a>
                </footer>
            </div>
        </div>
    )
}

export default Home
