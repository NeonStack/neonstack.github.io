import React from 'react';
const MainTitle = ({ title, className }) => {
    return (
        <div className={`flex flex-row gap-5 items-center justify-center `}>
            <hr className="w-full max-w-20 border" />
            <h1 className={`${className} text-3xl font-bold text-accent whitespace-nowrap`}>{title}</h1>
            <hr className="w-full max-w-20 border " />
        </div>
    )
}
export default MainTitle;