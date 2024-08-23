import React from 'react';
import SkillSvg from './SkillSvg';

const ContactCard = ({ icon = "", srcLink = "", srcTxt = "" }) => (
    <a href={srcLink} target='_blank' className='flex flex-row w-full h-14 gap-2 p-4 rounded-md bg-background-alt max-w-96 contact-card hover:shadow-xl transition-all duration-100'>
        <div className='w-[11%] flex items-center justify-center'>
            <div className='h-full aspect-square'>
                <SkillSvg value={icon} />
            </div>
        </div>
        <div className='flex-grow-[2] flex items-center'>
            <p className='text-[clamp(0.4rem,3.5vw,0.9rem)]'>{srcTxt}</p>
        </div>
    </a>
)

export default ContactCard;