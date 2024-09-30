import React from "react";
import Img from "./Img";

const TrainingCard = ({ title = "", provider = "", shortDesc = "", srcImg = "", verifyAt = "" }) => {
    return (
        <div className="bg-background flex flex-col gap-5 p-7 shadow-xl rounded-lg w-full max-w-96 lg:w-[29%] flex-shrink-0 flex-grow-0" >

            <Img src={srcImg} alt={title} className={"w-full aspect-video mx-auto rounded-lg shadow-md"} />

            <div className="flex flex-col gap-1">
                <h3 className="font-bold">{title}</h3>
                <h5 className="text-text-muted">{provider}</h5>
                <div className="my-3 min-h-28">
                    <p className="text-[0.95rem] text-text-subdued">{shortDesc}</p>
                </div>
            </div>


            <div className="flex flex-wrap gap-5 items-center justify-center">
                <a href={verifyAt} target="_blank" className="text-text bg-background-alt shadow-sm hover:shadow-lg duration-100 py-2 px-4 min-w-28 rounded-md">Verify</a>
            </div>
        </div>
    );
}

export default TrainingCard;


// return (
//     <div className="bg-background flex flex-col gap-5 p-7 shadow-xl rounded-lg max-w-96 lg:w-[29%]" >

//         <Img src={srcImg} alt={title} className={"w-full aspect-video mx-auto rounded-lg shadow-md"} />

//         <div className="flex flex-col gap-1">
//             <h3 className="font-bold">{title}</h3>
//             <h5 className="text-text-muted">{provider}</h5>
//             <div className="my-3 min-h-28">
//                 <p className="text-[0.95rem] text-text-subdued">{shortDesc}</p>
//             </div>
//         </div>


//         <div className="flex flex-wrap gap-5 items-center justify-center">
//             <a href={verifyAt} target="_blank" className="text-text bg-background-alt shadow-sm hover:shadow-lg duration-100 py-2 px-4 min-w-28 rounded-md">Verify</a>
//         </div>
//     </div>
// );