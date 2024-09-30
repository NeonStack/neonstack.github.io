import React, { useState } from 'react';
import Button from './components/Button.jsx';
export default function Hero({className}) {
    return (
        <>
            <div className={`flex flex-col justify-center hero-card h-fit text-center bg-background items-center ${className}`}>
                <div className="flex justify-center flex-col">
                    <div className="flex justify-center items-center flex-col gap-1">
                        <h4 className="text-[1.1rem] font-semibold text-text-subdued select-none">Hello world! I am</h4>
                        <h1 className="text-[1.8rem] font-extrabold text-accent">JOHN LLOYD UMANI</h1>
                        <h3 className="text-[1.2rem] font-semibold text-text-subdued">Aspiring Full Stack Developer</h3>
                    </div>
                    <div className="flex flex-row items-center justify-evenly mt-10 flex-wrap gap-4">
                        <Button href={'#contact'} addClass={'bg-accent px-9 hover:shadow-lg transition-shadows duration-100'}>Contact Me</Button>
                        {/* <Button addClass={'bg-text'}>My Resume</Button> */}
                    </div>
                </div>
            </div>
        </>

    );
}