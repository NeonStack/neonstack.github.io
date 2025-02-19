import MainTitle from "./components/MainTitle";

export default function AboutMe({className}) {
    return (
        <>
            <div className={`hero-card h-fit text-center bg-background-alt ${className}`}>
                <div className="text-center">
                    <MainTitle title="About Me" />
                    <div className="py-7 text-center">
                        <p className="text-[1.1rem]">
                            I am a 3rd year IT student passionate about full stack development. Experienced in web development and project management through academic project while currently exploring AI integration in web development.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}