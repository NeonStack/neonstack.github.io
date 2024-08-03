import React from "react";
export default function Footer() {
    const currYear = new Date().getFullYear();
    return (
        <>
            <footer className="h-fit min-h-24 bg-primary shadow-md flex items-center justify-center">
                <p className="text-center text-[0.8rem]">&copy; {currYear} John Lloyd Umani | All rights reserved</p>
            </footer>
        </>
    )
}