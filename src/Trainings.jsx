import { useState, useEffect } from "react";
import MainTitle from "./components/MainTitle";
import TrainingCard from "./components/TrainingCard";

export default function Trainings() {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(getInitialCardsPerPage());

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
    {
      title: "Networking Devices and Initial Configuration",
      provider: "Cisco Networking Academy",
      srcImg: "/trainingPictures/netwDevInitialConfig.png",
      shortDesc:
        "Completed a course on configuring network devices, mastering IPv4 subnetting, DHCP, and Cisco device setup for small networks.",
      verifyAt:
        "https://www.credly.com/badges/3cfea679-1e74-41db-9dc2-e883182aee84/public_url",
    },
    {
      title: "Endpoint Security",
      provider: "Cisco Networking Academy",
      srcImg: "/trainingPictures/endpointSec.png",
      shortDesc:
        "Completed a course on securing networks and endpoints, learning to protect devices, mitigate threats, and maintain data confidentiality and integrity.",
      verifyAt:
        "https://www.credly.com/badges/90d3c233-6138-4079-b23e-2c5e66c6ccd9/public_url",
    },
    {
      title: "Networking Basics",
      provider: "Cisco Networking Academy",
      srcImg: "/trainingPictures/netwBasics.png",
      shortDesc:
        "Completed a foundational course on networking, covering protocols, device configuration, and data flow through networks.",
      verifyAt:
        "https://www.credly.com/badges/bdc62a6c-2b02-4885-8138-cae641e26b54/public_url",
    },
  ];

  function getInitialCardsPerPage() {
    return window.innerWidth < 768 ? 1 : 3;
  }

  useEffect(() => {
    function handleResize() {
      setCardsPerPage(getInitialCardsPerPage());
      setCurrentPage(0); // Reset to first page when layout changes
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(TrainingValues.length / cardsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentCards = TrainingValues.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  return (
    <section className="h-fit text-center bg-background-alt">
      <div className="text-center">
        <MainTitle title="Trainings" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="absolute left-0 top-0 bottom-0 flex items-center z-20">
            <button
              onClick={handlePrev}
              className="w-12 h-12 flex items-center justify-center bg-black/20 hover:bg-black/40 text-white rounded-full text-2xl transition-all"
              aria-label="Previous trainings"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          </div>

          <div className="py-7 text-center flex flex-col gap-10 items-center min-h-[600px] lg:flex-row lg:justify-evenly lg:items-stretch">
            {currentCards.map((TrainingValue, index) => (
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

          <div className="absolute right-0 top-0 bottom-0 flex items-center z-20">
            <button
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center bg-black/20 hover:bg-black/40 text-white rounded-full text-2xl transition-all"
              aria-label="Next trainings"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-4">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentPage === index ? "bg-black w-4" : "bg-gray-300"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
