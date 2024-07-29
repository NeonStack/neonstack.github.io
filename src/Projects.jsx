import MainTitle from "./components/MainTitle";
import ProjectCard from "./components/ProjectCard";

export default function Projects() {
    return (
        <>
            <section className="h-fit text-center">
                <div className="text-center">
                    <MainTitle title="Projects" />
                    <div className="py-7 text-center flex flex-col gap-10 lg:flex-row lg:justify-evenly lg:items-stretch lg:flex-wrap">
                        <ProjectCard
                            title={"T1 Shop PH - Fan Concept"}
                            imgLink={"./src/assets/t1website.png"}
                            shortDesc={"School web development project showcasing an unofficial e-commerce platform. Demonstrates modern web design and functionality skills."}
                            skills={["html", "css", "javascript", "sqlite"]}
                            srcLink={"https://github.com/NeonStack/t1-website-mockup-philippines.git"}
                            webLink={"https://t1-philippines-shop.rf.gd/"}
                        />
                        <ProjectCard
                            title={"OLFU Quiz Game"}
                            imgLink={"./src/assets/olfuQuizGame.png"}
                            shortDesc={"Console-based quiz program in C++ covering multiple subjects with various difficulty levels. Features randomized questions, user accounts, and a top players list."}
                            skills={["c++"]}
                            srcLink={"https://github.com/NeonStack/OLFU-QUIZ-CONSOLE.git"}
                        />
                        <ProjectCard
                            title={"OLFU Quiz Game"}
                            imgLink={"./src/assets/olfuQuizGame.png"}
                            shortDesc={"Console-based quiz program in C++ covering multiple subjects with various difficulty levels. Features randomized questions, user accounts, and a top players list."}
                            skills={["c++"]}
                            srcLink={"https://github.com/NeonStack/OLFU-QUIZ-CONSOLE.git"}
                        />
                        <ProjectCard
                            title={"OLFU Quiz Game"}
                            imgLink={"./src/assets/olfuQuizGame.png"}
                            shortDesc={"Console-based quiz program in C++ covering multiple subjects with various difficulty levels. Features randomized questions, user accounts, and a top players list."}
                            skills={["c++"]}
                            srcLink={"https://github.com/NeonStack/OLFU-QUIZ-CONSOLE.git"}
                        />
                        <ProjectCard
                            title={"OLFU Quiz Game"}
                            imgLink={"./src/assets/olfuQuizGame.png"}
                            shortDesc={"Console-based quiz program in C++ covering multiple subjects with various difficulty levels. Features randomized questions, user accounts, and a top players list."}
                            skills={["c++"]}
                            srcLink={"https://github.com/NeonStack/OLFU-QUIZ-CONSOLE.git"}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}