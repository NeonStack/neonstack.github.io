import MainTitle from "./components/MainTitle";
import TrainingCard from "./components/TrainingCard";

export default function Trainings() {
    const TrainingValues = [
        {
            title: "SQL & RDBMS 101",
            provider: "Cognitive Class",
            srcImg: "/trainingPictures/ibmCertificate.png",
            shortDesc: "Completed a foundational course in SQL and relational databases, gaining a solid understanding of database concepts and SQL syntax through practical exercises.",
            verifyAt: "https://courses.cognitiveclass.ai/certificates/8e86f30dacc14204aeb71cd308ac0e58"
        },
        {
            title: "Responsive Web Design",
            provider: "freeCodeCamp",
            srcImg: "/trainingPictures/fccWebDesign.png",
            shortDesc: "Completed a course on responsive web design, acquiring skills to build flexible and accessible websites that perform seamlessly across different devices.",
            verifyAt: "https://www.freecodecamp.org/certification/JL_GREEN/responsive-web-design"
        }
    ]
    return (
        <>
            <section className="h-fit text-center bg-background-alt">
                <div className="text-center">
                    <MainTitle title="Trainings" />
                    <div className="py-7 text-center flex flex-col gap-10 lg:flex-row lg:justify-evenly lg:items-stretch lg:flex-wrap">
                        {/* test */}
                        {TrainingValues.map((TrainingValue, index) => (
                            <TrainingCard
                                key={index}
                                title={TrainingValue.title}
                                provider={TrainingValue.provider}
                                shortDesc={TrainingValue.shortDesc}
                                srcImg={TrainingValue.srcImg}
                                verifyAt={TrainingValue.verifyAt}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}