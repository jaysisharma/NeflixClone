import React, { useState } from 'react';
// import { IoLanguage } from 'react-icons/fa';
import { IoLanguage } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='header h-2/3 p-5 relative max-w overflow-hidden border-b-8 border-gray-800'>
      <div className="absolute inset-0 bg-black opacity-100"></div>
      <img className="absolute inset-0 w-full h-full object-cover bg-center opacity-40" src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="Background" />
      <div className="navbar max-w-[1200px] m-auto flex justify-between items-center z-10">
        <div className="logo relative">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" className='w-40' />
        </div>
        <div className="btn flex justify-between items-center gap-5 relative">
          <div className="relative ">
            <button
              className="bg-transparent text-white hover:bg-gray-400 border border-gray-500  font-bold py-1 px-4 rounded inline-flex items-center"
              onClick={toggleDropdown}
            >
              <span className='flex gap-2 items-center'><IoLanguage />English</span>
              <svg
                className="fill-current h-4 w-4 ml-2 mt-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12l-8-8 1.5-1.5L10 9.998 16.5 2.5 18 4l-8 8z"
                />
              </svg>
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg z-10">
                <ul>
                  <li className="border-b border-gray-200 py-2">
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Option 1
                    </a>
                  </li>
                  <li className="border-b border-gray-200 py-2">
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Option 2
                    </a>
                  </li>
                  <li className="border-b border-gray-200 py-2">
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Option 3
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <button className="btn bg-red-600 p-2 text-white text-sm rounded px-4">Sign IN</button>
        </div>
      </div>
      <div className="contentaa z-10 text-white absolute gap-4 flex justify-center items-center w-screen h-full flex-col">
        <h2 className='text-5xl font-bold'>
          Unlimited movies, TV shows and more</h2>
        <h3 className='text-2xl '>Watch anywhere. Cancel anytime.</h3>
        <p className='text-xl mt-2'>Ready to watch? Enter your email or mobile number to create or restart your membership.
        </p>
        <div className="input-box flex">
        <input type="text" className='bg-transparent border border-gray-500 px-4 w-96 py-2' placeholder='Email or Mobile number '/>
        <button className="btn bg-red-600 text-white p-[11px] w-48 ml-2 flex rounded text-2xl text-center pl-6">Get Started <MdKeyboardArrowRight className='text-3xl'/>
</button>
      </div>
      </div>
      
    </div>

  )
}

export default Header