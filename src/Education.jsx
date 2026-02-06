import MainTitle from "./components/MainTitle";
import Img from "./components/Img";

export default function Education({className}) {
    return (
        <>
            <div className={`hero-card h-fit text-center bg-background ${className}`}>
                <div className="text-center">
                    <MainTitle title="Education" />
                    <div className="py-7 text-center">
                        <div className="rounded-lg flex justify-center items-center flex-col gap-6">
                            <Img src={"/logo/OLFULOGO.png"} alt={"OLFU LOGO"} className={"rounded-lg w-2/6 max-w-64 shadow-lg"}/>
                            <p className="font-medium">OUR LADY OF FATIMA UNIVERSITY <br /><span className="text-text-muted">- B.Sc. Information Technology -</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}