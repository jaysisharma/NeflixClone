import React from 'react'

const RightMenu = (props) => {
    return (
        <div className="b-color border-b-8 border-gray-800 h-[600px] flex items-center">
            <div className='max-w-[1200px] w-full m-auto text-white flex items-center justify-center'  >
            <div className="left w-1/2 ml-4">
                    <div className="tv p-24 pt-30  flex " style={{ backgroundImage: 'url("https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png");', }}>
                        <img src={props.url} alt=""  className='h-full scale-150'/>
                    </div>

                </div>
                <div className="right w-1/2">
                    <h2 className="text-5xl font-bold">Enjoy on your TV</h2>
                    <p className='text-xl mt-4'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
               
            </div>
        </div>
    )
}

export default RightMenu