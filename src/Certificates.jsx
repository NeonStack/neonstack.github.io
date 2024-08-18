import MainTitle from "./components/MainTitle";
import Certificate from "./components/Certificate";

export default function Certificates() {
    const CertificatesValues = [
        {
            title: "SQL & RDBMS 101", 
            provider: "Cognitive Class", 
            srcImg: "/certificatePictures/ibmCertificate.png", 
            shortDesc: "Certified in an introductory SQL and relational databases course, mastering SQL basics, relational model concepts, and essential SQL statements through practical exercises.",
            verifyAt: "https://courses.cognitiveclass.ai/certificates/8e86f30dacc14204aeb71cd308ac0e58"
        },
        {
            title: "Responsive Web Design", 
            provider: "freeCodeCamp", 
            srcImg: "/certificatePictures/fccWebDesign.png", 
            shortDesc: "Earned a Responsive Web Design Certification, demonstrating proficiency in HTML for content structure and CSS for styling, essential for building well-designed, adaptable webpages.",
            verifyAt: "https://www.freecodecamp.org/certification/JL_GREEN/responsive-web-design"
        }
    ]
    return (
        <>
            <section className="h-fit text-center bg-background-alt">
                <div className="text-center">
                    <MainTitle title="Certificates" />
                    <div className="py-7 text-center flex flex-col gap-10 lg:flex-row lg:justify-evenly lg:items-stretch lg:flex-wrap">
                        {/* test */}
                        {CertificatesValues.map((CertificatesValue, index) => (
                            <Certificate 
                            key={index}
                            title={CertificatesValue.title}
                            provider={CertificatesValue.provider} 
                            shortDesc={CertificatesValue.shortDesc}
                            srcImg={CertificatesValue.srcImg} 
                            verifyAt={CertificatesValue.verifyAt}
                        />
                        ))} 
                    </div>
                </div>
            </section>
        </>
    );
}