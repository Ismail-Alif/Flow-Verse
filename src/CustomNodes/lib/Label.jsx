import React from "react";

const Label = ({ data }) =>{
    return(
        <header className="absolute -top-[14px] left-1/2 transform -translate-x-1/2">
            <h2 className="text-[8px] font-semibold text-gray-800">{data}</h2>
        </header>
    )
}
export default Label;