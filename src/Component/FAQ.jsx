import React, { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md"; 
const FAQ = () => {
    const [openId, setOpenId] = useState(null);

    const toggle = (id) => {
        setOpenId(openId === id ? null : id);
    };

    const faqs = [{
        id: 1,
        title: "What is Netflix?",
        desc: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices\n   You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    }, {
        id: 2,
        title: "How much does Netflix cost?",
        desc: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts."
    },
    {
        id: 3,
        title: "Where can I watch?",
        desc: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
        id: 4,
        title: "How do I cancel?",
        desc: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
        id: 5,
        title: "What I can watch on Netflix?",
        desc: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
        id: 6,
        title: "How do I cancel?",
        desc: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    }];

    return (
        <div className="faq b-color border-b-8 text-white border-gray-800 h-[90vh] flex items-center justify-center flex-col gap-4">
            <div className="content-f flex flex-col gap-3 max-w-[1200px]">
                <h2 className='text-5xl font-bold text-center mb-4'>Frequently Asked Questions</h2>
                {faqs.map(({ id, title, desc }) => (
                    <div key={id} className={`accordian bg-[#2d2d2d] w-full cursor-pointer overflow-hidden transition-max-height duration-500 ease-in-out ${openId === id ? 'max-h-[18rem]' : 'max-h-[72px]'} `}>
                        <div className="top flex justify-between hover:bg-gray-500 border-b p-5 border-black" onClick={() => toggle(id)}>
                            <h2 className='text-3xl'>{title}</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="#ffffff" d={openId === id ? "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z " : "M19 11H13V5c0-.55-.45-1-1-1s-1 .45-1 1v6H5c-.55 0-1 .45-1 1s.45 1 1 1h6v6c0 .55.45 1 1 1s1-.45 1-1v-6h6c.55 0 1-.45 1-1s-.45-1-1-1z" } />
                            </svg>
                        </div>
                        <div className="button p-4">
                            <p className='text-xl'>
                                {desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <p className='mt-10 text-2xl'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="input-box flex">
        <input type="text" className='bg-transparent border border-gray-500 px-4 w-96 py-2' placeholder='Email or Mobile number '/>
        <button className="btn bg-red-600 text-white p-[11px] w-48 ml-2 flex rounded text-2xl text-center pl-6">Get Started <MdKeyboardArrowRight className='text-3xl'/>
</button>
      </div>
        </div>
    );
}

export default FAQ;
