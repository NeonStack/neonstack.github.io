import React from 'react';
import MainTitle from './components/MainTitle';
import ContactCard from './components/ContactCard';

export default function Contact() {
    return (
        <>
            <section className="h-fit text-center">
                <div className="text-center">
                    <MainTitle title="Contact" />
                    <div className="py-7 text-center flex flex-row flex-wrap justify-evenly gap-5 items-center">
                        <ContactCard
                            icon='gmail'
                            srcTxt='umani.johnlloyd.esplana@gmail.com'
                            srcLink='mailto:umani.johnlloyd.esplana@gmail.com'
                        />
                        <ContactCard
                            icon='linkedin'
                            srcTxt='John Lloyd Umani'
                            srcLink='https://www.linkedin.com/in/john-lloyd-umani/'
                        />
                        <ContactCard
                            icon='gmail'
                            srcTxt='umani.johnlloyd.esplana@gmail.com'
                            srcLink='mailto:umani.johnlloyd.esplana@gmail.com'
                        />
                        <ContactCard
                            icon='linkedin'
                            srcTxt='John Lloyd Umani'
                            srcLink='https://www.linkedin.com/in/john-lloyd-umani/'
                        />
                        <ContactCard
                            icon='gmail'
                            srcTxt='umani.johnlloyd.esplana@gmail.com'
                            srcLink='mailto:umani.johnlloyd.esplana@gmail.com'
                        />
                        <ContactCard
                            icon='linkedin'
                            srcTxt='John Lloyd Umani'
                            srcLink='https://www.linkedin.com/in/john-lloyd-umani/'
                        />
                    </div>
                </div>
            </section>
        </>
    );
} 