import React, { useState } from 'react';
import Button from './components/Button.jsx';
export default function Hero({className}) {
    return (
        <>
            <section className={`h-fit text-center bg-background ${className}`}>
                <div className="flex justify-center flex-col">
                    <div className="flex justify-center items-center flex-col gap-1">
                        <h3 className="text-[1.2rem] font-semibold">Hello World, I Am</h3>
                        <h1 className="text-[1.8rem] font-extrabold text-accent">JOHN LLOYD UMANI</h1>
                        <h3 className="text-[1.2rem] font-semibold">Aspiring Full Stack Developer</h3>
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