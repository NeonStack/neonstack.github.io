import MainTitle from "./components/MainTitle";
import SkillSvg from "./components/SkillSvg";

export default function Skills({ className }) {
  const mySkills = [
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "JavaScript", icon: "javascript" },
    { name: "React", icon: "react" },
    { name: "Tailwind", icon: "tailwind" },
    { name: "C++", icon: "c++" },
    { name: "PHP", icon: "php" },
    { name: "MySQL", icon: "mysql" },
    { name: "MariaDB", icon: "mariadb" },
    { name: "Svelte", icon: "svelte" },
    { name: "Supabase", icon: "supabase" },
    { name: "Python", icon: "python" },
  ];

  return (
    <>
      <div
        className={`hero-card h-fit text-center bg-background-alt ${className}`}
      >
        <div className="text-center">
          <MainTitle title="Skills" />
          <div className="py-7 grid grid-cols-3 gap-10">
            {mySkills.map((mySkill, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 w-20 justify-center mx-auto"
              >
                <SkillSvg value={mySkill.icon} />
                <h2
                  className="w-full text-center"
                  style={{ fontSize: "clamp(0.9rem, 2.5vw, 1rem)" }}
                >
                  {mySkill.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
