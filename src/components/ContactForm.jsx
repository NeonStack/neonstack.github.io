import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import MainTitle from './MainTitle';

export const ContactForm = () => {
    const emailForm = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailForm.current, {
                publicKey: 'YOUR_PUBLIC_KEY',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <form ref={emailForm} onSubmit={sendEmail} className='flex flex-col flex-initial p-4 lg:p-7 bg-background-alt rounded-md w-full max-w-[30rem] lg:w-[30rem]'>
            <div className='hidden lg:block'>
                <h1 className='font-bold'>Contact Form</h1>
            </div>
            <input type="hidden" name='my_name' value={"John"} />
            <label for="from_name" className='py-2 mt-3 w-full flex flex-start'>Name:</label>
            <input type="text" name="from_name" className='rounded-sm text-text bg-background px-3 py-3 text-md' required />
            <label for="email" className='py-2 mt-3 w-full flex flex-start'>Email:</label>
            <input type="email" name="email" className='rounded-sm text-text bg-background px-3 py-3 text-md' required />
            <label for="message" className='py-2 mt-3 w-full flex flex-start'>Message:</label>
            <textarea name="message" className='rounded-sm text-text bg-background px-3 py-3 text-md resize-none h-48' required />
            <input type="submit" value="Send" className="text-text bg-background shadow-sm hover:shadow-lg duration-100 py-2 px-20 w-fit rounded-md mt-10 mx-auto cursor-pointer" />
        </form>
    );
};