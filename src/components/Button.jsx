import React from "react";
const Button = ({href, addClass, children }) => {
    const baseClass = "py-3 px-5 text-primary font-extrabold text-[1.1rem] rounded-md";
    return <a href={href} className={`${baseClass} ${addClass}`}>{children}</a>;
}

export default Button;