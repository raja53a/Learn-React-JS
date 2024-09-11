import React from "react";

function Button({ onClick, style, btnName, textColor = "white" }) {

    return (
        <>
            <button 
            className="outline-none px-4 py-2 rounded-full text-white shadow-lg" 
            onClick={onClick} style={{...style, color: textColor}}> {btnName} 
            </button >
      </>
    );
}
export default Button;
