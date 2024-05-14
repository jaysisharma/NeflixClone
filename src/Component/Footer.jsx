import React,{useState} from 'react'
import { IoLanguage } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
const Footer = () => {
    const grid1 = ["FAQ", "Investor Relations", "Privacy", "Speed Test"]
    const grid2= ["Help Center", "Jobs", "Cookie Preference", "Legal Notices"]
    const grid3 = ["Account", "Ways to Watch", "Corporate Information", "Only on Netflix"]
    const grid4 = ["Media Center", "Term of Use", "Contact Us"]

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    return (
        <div className='h-[400px] w-screen max-w-[1200px] m-auto text-gray-300 py-10 pl-4'>

            <p className='mt-8 mb-4'>Questions? Call <span className="underline">000-800-919-1694</span></p>
            <div className="items grid grid-cols-4 gap-8">
                <div className="item1 ">
                    {grid1.map((index,item)=>(
                        <h1 key={item} className='underline mb-3 text-sm'>{index}</h1>
                    ))}
                </div>
                <div className="item1 ">
                    {grid2.map((index,item)=>(
                        <h1 key={item} className='underline mb-3 text-sm'>{index}</h1>
                    ))}
                </div>
                <div className="item1 ">
                    {grid3.map((index,item)=>(
                        <h1 key={item} className='underline mb-3 text-sm'>{index}</h1>
                    ))}
                </div>
                <div className="item1 ">
                    {grid4.map((index,item)=>(
                        <h1 key={item} className='underline mb-3 text-sm'>{index}</h1>
                    ))}
                </div>
            </div>
            <div className="relative mt-4">
            <button
              className="bg-transparent text-white hover:bg-gray-400 border border-gray-500  font-bold py-1 px-3 rounded inline-flex items-center"
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
              <div className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-10">
                <ul>
                  <li className="border-b border-gray-200 ">
                    <a href="#" className="block p-2 text-gray-800 hover:bg-gray-200">
                      English
                    </a>
                  </li>
                  
                  <li className="">
                    <a href="#" className="block p-2 text-gray-800 hover:bg-gray-200">
                      Hindi
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <p className='p-2 pt-5'>Netflix India</p>
        </div>
    )
}

export default Footer