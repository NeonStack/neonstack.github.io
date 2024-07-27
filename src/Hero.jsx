import React, { useState } from 'react';
import Button from './components/Button.jsx';
export default function Hero() {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoaded = () => {
        setImageLoaded(!imageLoaded);
    }
    return (
        <>
            <section className="h-fit text-center">
                <div className="flex justify-center flex-col mt-[3rem]">
                    <div className="flex justify-center">
                        {
                            !imageLoaded &&
                            <div className="rounded-3xl w-[12rem] h-[12rem] max-w-64 shadow-xl border-t-accent border-l-accent border-r-text border-b-text border-solid border-4 bg-gray-400 animate-pulse" />
                        }
                        <img
                            src="./src/assets/jl.webp"
                            alt=""
                            className={`rounded-3xl w-3/5 max-w-64 shadow-xl border-t-accent border-l-accent border-r-text border-b-text border-solid border-4 ${imageLoaded ? 'block' : 'hidden'}`}
                            onLoad={handleImageLoaded}
                        />
                    </div>
                    <div className="flex justify-center items-center flex-col mt-7 gap-1">
                        <h3 className="text-[1.2rem] font-semibold">Hello World, I Am</h3>
                        <h1 className="text-[1.8rem] font-extrabold text-accent">JOHN LLOYD UMANI</h1>
                        <h3 className="text-[1.2rem] font-semibold">Aspiring Full Stack Developer</h3>
                    </div>
                    <div className="flex justify-center items-center text-center mt-8">
                        <p className="text-[1.1rem]"><span className="text-accent">&#9654;</span>  Committed to learning and growing in the field of web development. Looking forward to building great things with others.</p>
                    </div>
                    <div className="flex flex-row items-center justify-evenly mt-10 flex-wrap gap-4">
                        <Button addClass={'bg-accent'}>Contact Me</Button>
                        <Button addClass={'bg-text'}>My Resume</Button>
                    </div>
                </div>
            </section>
        </>

    );
}