import React from "react";
export default function Footer() {
    const currYear = new Date().getFullYear();
    return (
        <>
            <footer className="h-fit min-h-24 bg-primary shadow-md flex items-center justify-around px-3 lg:px-28 lg:justify-between">
                <div>
                    <p className="text-center text-[0.77rem] text-wrap">&copy; {currYear} John Lloyd Umani | All rights reserved</p>
                </div>
                <div>
                    <a href="#" className="bg-background p-3 rounded-md">&uarr;</a>
                </div>
            </footer>
        </>
    )
}