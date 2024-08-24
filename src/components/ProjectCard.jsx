import React from "react";
import SkillSvg from "./SkillSvg";
import Img from "./Img";

const ProjectCard = ({ title = "", imgLink = "", shortDesc = "", webLink = "", srcLink = "", skills = [] }) => {

    return (
        <div className="bg-background-alt flex flex-col gap-5 p-7 border-text-muted border-2 shadow-xl rounded-lg lg:w-[29%] lg:justify-between" >
            <Img src={imgLink} alt={title} className={"w-full aspect-video mx-auto rounded-lg shadow-md"} />
            <h3 className="font-bold">{title}</h3>
            <div className="min-h-28">
                <p className="text-[0.95rem] text-text-subdued">{shortDesc}</p>
            </div>
            <div className="flex flex-wrap items-center justify-evenly my-2">
                {skills.map((skill) => (
                    skills.includes(skill) &&
                    <div className="w-7" key={skill}>
                        <SkillSvg value={skill} />
                    </div>
                ))}
            </div>
            <div className="flex flex-wrap gap-5 items-center justify-center">
                {srcLink && (
                    <a href={srcLink} target="_blank" className="text-text bg-background hover:shadow-lg duration-100 py-2 px-4 min-w-28 rounded-md">Source</a>
                )}
                {webLink && (
                    <a href={webLink} target="_blank" className="text-text bg-background hover:shadow-lg duration-100 py-2 px-4 min-w-28 rounded-md">Demo</a>
                )}
            </div>
        </div>
    )
}

export default ProjectCard;