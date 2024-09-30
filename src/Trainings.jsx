import MainTitle from "./components/MainTitle";
import TrainingCard from "./components/TrainingCard";

export default function Trainings() {
  const TrainingValues = [
    {
      title: "SQL & RDBMS 101",
      provider: "Cognitive Class",
      srcImg: "/trainingPictures/ibmCertificate.png",
      shortDesc:
        "Completed a foundational course in SQL and relational databases, gaining a solid understanding of database concepts and SQL syntax through practical exercises.",
      verifyAt:
        "https://courses.cognitiveclass.ai/certificates/8e86f30dacc14204aeb71cd308ac0e58",
    },
    {
      title: "Responsive Web Design",
      provider: "freeCodeCamp",
      srcImg: "/trainingPictures/fccWebDesign.png",
      shortDesc:
        "Completed a course on responsive web design, acquiring skills to build flexible and accessible websites that perform seamlessly across different devices.",
      verifyAt:
        "https://www.freecodecamp.org/certification/JL_GREEN/responsive-web-design",
    },
    {
      title: "Introduction to Cybersecurity",
      provider: "Cisco Networking Academy",
      srcImg: "/trainingPictures/intro_to_cybersecurity.jpg",
      shortDesc:
        "Completed a course on cybersecurity fundamentals, gaining knowledge of common cyber threats, online safety practices, and strategies for protecting individuals and organizations from attacks.",
      verifyAt:
        "https://www.credly.com/badges/6d61b7d6-f5e2-4ad3-a55d-b8596d355619/public_url",
    },
    {
      title: "Introduction to Packet Tracer",
      provider: "Cisco Networking Academy",
      srcImg: "/trainingPictures/intro_to_packet_tracer.jpg",
      shortDesc:
        "Completed a course on Cisco Packet Tracer, developing skills to simulate networks, use network controllers, and integrate IoT devices within a smart home environment.",
      verifyAt:
        "https://www.credly.com/badges/028be8fb-c8b7-4c26-b411-b3ec0206438f/public_url",
    },
  ];
  return (
    <>
      <section className="h-fit text-center bg-background-alt relative overflow-hidden">
        <div className="text-center">
          <MainTitle title="Trainings" />
          <div className="w-full relative">
            {/* Subtle gradient overlays for side fading */}
            <div className="hidden lg:block absolute top-0 left-0 w-2 h-full bg-gradient-to-r from-background-alt to-transparent z-10 pointer-events-none"></div>
            <div className="hidden lg:block absolute top-0 right-0 w-3 h-full bg-gradient-to-l from-background-alt to-transparent z-10 pointer-events-none"></div>

            {/* Main content - keeping original styles */}
            <div className="w-full py-7 text-center flex flex-col gap-10 items-center lg:flex-row lg:items-stretch lg:overflow-auto">
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
        </div>
      </section>
    </>
  );
}

// return (
//     <>
//         <section className="h-fit text-center bg-background-alt">
//             <div className="text-center">
//                 <MainTitle title="Trainings" />
//                 <div className="py-7 text-center flex flex-col gap-10 items-center lg:flex-row lg:justify-evenly lg:items-stretch lg:flex-wrap">
//                     {/* test */}
//                     {TrainingValues.map((TrainingValue, index) => (
//                         <TrainingCard
//                             key={index}
//                             title={TrainingValue.title}
//                             provider={TrainingValue.provider}
//                             shortDesc={TrainingValue.shortDesc}
//                             srcImg={TrainingValue.srcImg}
//                             verifyAt={TrainingValue.verifyAt}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     </>
// );
