import React from 'react'

const LeftMenu = (props) => {
  return (
   <div className="b-color border-b-8 border-gray-800 h-[600px] flex items-center">
     <div className='max-w-[1200px] w-full m-auto text-white flex items-center justify-center'  >
        <div className="left w-1/2">
          <h2 className="text-5xl font-bold">Enjoy on your TV</h2>
          <p className='text-xl mt-4'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>
        <div className="right w-1/2 ml-4">
          <div className="tv p-24 pt-30  flex " style={{backgroundImage: 'url("https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png");',}}>
          <video data-uia="nmhp-card-animation-asset-video" autoplay="" playsinline="" muted="" loop=""><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"/></video>

          </div>
         
           </div>
    </div>
   </div>
  )
}

export default LeftMenu