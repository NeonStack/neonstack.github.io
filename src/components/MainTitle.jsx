import React from 'react';
const MainTitle = ({ title }) => {
    return (
        <div className="flex flex-row gap-5 items-center">
            <hr className="w-full border" />
            <h1 className="text-3xl font-bold text-accent whitespace-nowrap">{title}</h1>
            <hr className="w-full border" />
        </div>
    )
}
export default MainTitle;