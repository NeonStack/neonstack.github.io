import emailjs from '@emailjs/browser';
import { useRef, useState, useEffect } from 'react';
import { toast, ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactForm = () => {
    const [senderName, setSenderName] = useState("");
    const [senderEmail, setSenderEmail] = useState("");
    const [senderMessage, setSenderMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [currTheme, setCurrTheme] = useState(localStorage.getItem('data-theme') || 'dark');

    const emailForm = useRef(null);

    useEffect(() => {
        const updateTheme = () => {
            setCurrTheme(localStorage.getItem('data-theme') || 'dark');
        };

        updateTheme();

        window.addEventListener('themeChange', updateTheme);

        return () => {
            window.removeEventListener('themeChange', updateTheme);
        };
    }, []);


    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!senderName.trim() || !senderEmail.trim() || !senderMessage.trim()) {
            toast.error('Please fill in all fields.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: currTheme === 'dark' ? 'dark' : 'light',
            });

            setIsLoading(false);

            return;
        }

        emailjs
            .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, emailForm.current, {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setSenderName("");
                    setSenderEmail("");
                    setSenderMessage("");
                    toast.success('Email Sent Successfully!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: currTheme === 'dark' ? 'dark' : 'light',
                        transition: Bounce,
                    });
                },
                (error) => {
                    console.error('FAILED...', error);
                    toast.error('Failed to Send Email.', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: currTheme === 'dark' ? 'dark' : 'light',
                    });
                },
            )
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <>
            <form ref={emailForm} onSubmit={sendEmail} className='flex flex-col flex-initial p-4 lg:p-7 bg-background-alt rounded-md w-full max-w-[30rem] lg:w-[30rem] transition-all duration-200'>
                <h1 className='font-bold'> Contact Form</h1>
                <input type="hidden" name='my_name' value={"John"} />
                <label htmlFor="sender_name" className='py-2 mt-3 w-full flex flex-start font-medium'><span className='text-red-500'>*</span>&nbsp;Name:</label>
                <input
                    type="text"
                    name="sender_name"
                    id='sender_name'
                    className='rounded-sm text-text bg-background px-3 py-3 text-md'
                    placeholder='Enter your name'
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    required
                />
                <label htmlFor="sender_email" className='py-2 mt-3 w-full flex flex-start font-medium'><span className='text-red-500'>*</span>&nbsp;Email:</label>
                <input
                    type="email"
                    name="sender_email"
                    id='sender_email'
                    className='rounded-sm text-text bg-background px-3 py-3 text-md'
                    placeholder='Enter your email'
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    required
                />
                <label htmlFor="sender_message" className='py-2 mt-3 w-full flex flex-start font-medium'><span className='text-red-500'>*</span>&nbsp;Message:</label>
                <textarea
                    name="sender_message"
                    id='sender_message'
                    className='rounded-sm text-text bg-background px-3 py-3 text-md resize-none h-48'
                    placeholder='Enter your message'
                    value={senderMessage}
                    onChange={(e) => setSenderMessage(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    disabled={isLoading}
                    className="flex justify-center items-center text-text bg-background shadow-sm hover:shadow-lg duration-100 py-2 px-8 min-w-[8rem] min-h-[2.5rem] rounded-md mt-10 mx-auto cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? (
                        <div className='h-5 w-5 border-4 border-accent border-t-primary rounded-full animate-spin ease-in-out'></div>
                    ) : (
                        'Send'
                    )}
                </button>
            </form>
            <ToastContainer />
        </>
    );
};
