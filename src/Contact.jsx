import React from 'react';
import MainTitle from './components/MainTitle';
import ContactCard from './components/ContactCard';
import { ContactForm } from './components/ContactForm';

export default function Contact() {
    const ContactCardValues = [
        { icon: "gmail", srcTxt: "umani.johnlloyd.esplana@gmail.com", srcLink: "mailto:umani.johnlloyd.esplana@gmail.com" },
        { icon: "linkedin", srcTxt: "John Lloyd Umani", srcLink: "https://www.linkedin.com/in/john-lloyd-umani/" },
        { icon: "github", srcTxt: "NeonStack", srcLink: "https://github.com/NeonStack" }
    ]
    return (
        <>
            <section className="h-fit text-center">
                <div className="text-center">

                    <MainTitle title="Contact" />

                    <div className='flex flex-col lg:flex-row gap-9 lg:gap-10 py-7 lg:justify-center lg:mt-10'>
                        {/* contact cards - now first in order */}
                        <div className="lg:bg-background-alt lg:p-7 rounded-md text-center flex flex-col flex-wrap justify-evenly lg:gap-10 lg:justify-center items-center h-fit min-h-64">
                            <div className='hidden lg:block'>
                                <h1 className='font-bold'>Get In Touch</h1>
                            </div>
                            {ContactCardValues.map((ContactCardValue, index) => (
                                <ContactCard
                                    key={index}
                                    icon={ContactCardValue.icon}
                                    srcTxt={ContactCardValue.srcTxt}
                                    srcLink={ContactCardValue.srcLink}
                                />
                            ))}
                        </div>

                        {/* contact form */}
                        <div className='flex justify-center items-center w-full h-full lg:w-fit'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
} 