import MainTitle from "./components/MainTitle";
import Certificate from "./components/Certificate";

export default function Certificates() {
    return (
        <>
            <section className="h-fit text-center bg-background-alt">
                <div className="text-center">
                    <MainTitle title="Certificates" />
                    <div className="py-7 text-center flex flex-col gap-10">
                        {/* test */}
                        <Certificate 
                            title={"SQL & RDBMS 101"} 
                            provider={"Cognitive Class"} 
                            srcImg={"./src/assets/ibmCertificate.png"} 
                            verifyAt={"https://courses.cognitiveclass.ai/certificates/8e86f30dacc14204aeb71cd308ac0e58"}
                        />
                        <Certificate 
                            title={"Responsive Web Design"} 
                            provider={"freeCodeCamp"} 
                            srcImg={"./src/assets/fccWebDesign.png"} 
                            verifyAt={"https://www.freecodecamp.org/certification/JL_GREEN/responsive-web-design"}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}