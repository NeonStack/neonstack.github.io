import React from "react";
export default function Footer() {
    const currYear = new Date().getFullYear();
    return (
        <>
            <footer className="bg-primary shadow-md">
                <div className="h-fit min-h-24 flex items-center justify-around px-6 lg:px-28 lg:justify-between gap-2">
                    <div>
                        <p className="text-center text-[0.77rem] text-wrap">&copy; {currYear} John Lloyd Umani | All rights reserved</p>
                    </div>
                    <div>
                        <a href="#" className="bg-background p-3 rounded-md">&uarr;</a>
                    </div>
                </div>
            </footer>
        </>
    )
}