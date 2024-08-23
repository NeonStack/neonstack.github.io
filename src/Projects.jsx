import MainTitle from "./components/MainTitle";
import ProjectCard from "./components/ProjectCard";

export default function Projects() {
    const projectCardValues = [
        {
            title: "GO FOR IT - Internship Jobs",
            imgLink: "/projectPictures/goforit.png",
            shortDesc: "A research project website focusing on creating a seamless and empowering experience for both students and employers. Made user-friendly platform allowing them to discover internships that align with their specific skills and programs.",
            skills: ["html", "css", "javascript", "php", "mysql"],
            webLink: "https://goforit.rf.gd/"
        },
        {
            title: "T1 Shop PH - Fan Concept",
            imgLink: "/projectPictures/t1website.png",
            shortDesc: "School web development project showcasing an unofficial e-commerce platform. Demonstrates modern web design and functionality skills.",
            skills: ["html", "css", "javascript", "php", "mysql"],
            srcLink: "https://github.com/NeonStack/t1-website-mockup-philippines.git",
            webLink: "https://t1-philippines-shop.rf.gd/"
        },
        {
            title: "OLFU Quiz Game",
            imgLink: "/projectPictures/olfuQuizGame.png",
            shortDesc: "Console-based quiz program in C++ covering multiple subjects with various difficulty levels. Features randomized questions, user accounts, and a top players list.",
            skills: ["c++"],
            srcLink: "https://github.com/NeonStack/OLFU-QUIZ-CONSOLE.git"
        }
    ];

    return (
        <section className="h-fit text-center">
            <div className="text-center">
                <MainTitle title="Projects" />
                <div className="py-7 text-center flex flex-col gap-10 lg:flex-row lg:justify-evenly lg:items-stretch lg:flex-wrap">
                    {projectCardValues.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            imgLink={project.imgLink}
                            shortDesc={project.shortDesc}
                            skills={project.skills}
                            srcLink={project.srcLink}
                            webLink={project.webLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
