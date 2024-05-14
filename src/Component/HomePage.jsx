import React from 'react'
import Header from './Header'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import FAQ from './FAQ'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div className='bg-black h-screen w-screen overflow-x-hidden'>
        <Header/>
        <LeftMenu/>
        <RightMenu url="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"/>
        <LeftMenu/>
        <RightMenu url="https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"/>
        <FAQ/>
        <Footer/>
    </div>
  )
}

export default HomePage