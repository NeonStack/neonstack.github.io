import { useState, useEffect } from "react";
import MainTitle from "./components/MainTitle";
import TrainingCard from "./components/TrainingCard";
import { trainingValues } from "./data/portfolioData";

export default function Trainings() {
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(getInitialCardsPerPage());

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

  const totalPages = Math.ceil(trainingValues.length / cardsPerPage);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentCards = trainingValues.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  return (
    <section className="h-fit text-center bg-background-alt">
      <div className="text-center">
        <MainTitle title="Trainings" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
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

          <div className="py-7 text-center flex flex-col gap-10 items-center h-[680px] lg:flex-row lg:justify-evenly lg:items-stretch transition-all duration-500 ease-in-out">
            {currentCards.map((TrainingValue, index) => (
              <TrainingCard
                key={`${currentPage}-${index}`}
                title={TrainingValue.title}
                provider={TrainingValue.provider}
                shortDesc={TrainingValue.shortDesc}
                srcImg={TrainingValue.srcImg}
                verifyAt={TrainingValue.verifyAt}
              />
            ))}
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
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

          <div className="flex justify-center gap-2 mt-4 pb-4">
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
