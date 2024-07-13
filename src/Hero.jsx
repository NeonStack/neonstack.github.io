export default function Hero() {
    return (
        <>
            <section className="h-[100vh] bg-gradient-to-br from-background-light to-background-dark mt-[5rem] ]">
                <div className="flex justify-center flex-col h-[85%]">
                    <div className="flex justify-center">
                        <img src="./public/jl.webp" alt="" className="rounded-3xl w-3/5 max-w-96 shadow-xl border-t-accent border-l-accent border-r-text border-b-text border-solid border-4" />
                    </div>
                    <div className="flex justify-center items-center flex-col mt-7 gap-1">
                        <h3 className="text-[1.2rem] font-semibold">Hello World, I Am</h3>
                        <h1 className="text-[2rem] font-extrabold text-accent">JOHN LLOYD UMANI</h1>
                        <h3 className="text-[1.2rem] font-semibold">Aspiring Full Stack Developer</h3>
                    </div>
                    <div className="flex justify-center items-center text-center mt-8">
                        <p className="text-[1.1rem]"><span className="text-accent">&#9654;</span> Passionate about creating efficient, user-friendly web solutions. Always learning, always coding. Let's build something great together.</p>
                    </div>
                    <div className="flex flex-row items-center justify-evenly mt-16">
                        <a className="py-3 px-5 bg-accent text-primary font-extrabold text-[1.1rem] rounded-md">Contact Me</a>
                        <a className="py-3 px-5 bg-text text-primary font-extrabold text-[1.1rem] rounded-md">My Resume</a>
                    </div>
                </div>
            </section>
            <section className="h-[100vh]">

            </section>
        </>

    );
}