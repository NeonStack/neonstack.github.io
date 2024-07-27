import React from "react";
const Button = ({ addClass, children }) => {
    const baseClass = "py-3 px-5 text-primary font-extrabold text-[1.1rem] rounded-md shadow-xl";
    return <button className={`${baseClass} ${addClass}`}>{children}</button>;
}

export default Button;