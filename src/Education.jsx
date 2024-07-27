import MainTitle from "./components/MainTitle";

export default function Education() {
    return (
        <>
            <section className="h-fit text-center">
                <div className="text-center">
                    <MainTitle title="Education" />
                    <div className="py-7 text-center">
                        <div className="rounded-lg flex justify-center items-center flex-col gap-6">
                            <img src="./src/assets/OLFULOGO.png" alt="OLFU LOGO" className="rounded-lg w-3/5 max-w-64 shadow-lg" />
                            <p className="font-medium">OUR LADY OF FATIMA UNIVERSITY <br /><span className="text-text-muted">- B.Sc. Information Technology -</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}