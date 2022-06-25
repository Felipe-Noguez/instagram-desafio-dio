import React from "react"
import phoneImage from "../../assets/img/instagram-celular.png"

function PhoneIcon() {
    return (
        <div className="flex md:hidden">
            <img className="mx-1 my-4 max-w-[600px]" src={phoneImage}></img>
        </div>
    )
}

export default PhoneIcon
