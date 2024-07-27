import React from "react";

const Certificate = ({ title = "", provider = "", srcImg = "", verifyAt = "" }) => {
    return (
        <div className="bg-background flex flex-col gap-5 p-7 shadow-xl h-fit rounded-lg" >
            <img className="w-full rounded-lg shadow-md" src={srcImg} alt=<img className="w-full rounded-lg shadow-md" src={srcImg} alt={`Picture of ${title}`} /> />
            <div className="flex flex-col gap-1">
                <h3 className="font-bold">{title}</h3>
                <h5 className="text-text-subdued">{provider}</h5>
            </div>

            <div className="flex flex-wrap gap-5 items-center justify-center">
                <a href={verifyAt} target="_blank" className="text-text bg-background-alt shadow-lg py-2 px-4 min-w-28 rounded-md">Verify</a>
            </div>
        </div>
    );
}

export default Certificate;