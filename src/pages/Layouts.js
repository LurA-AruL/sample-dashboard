import React from 'react'
import Sidebar from '../components/Sidebar'
import NavSection from '../components/NavSection'
import TopMenu from '../components/TopMenu'

export default function Layouts() {
    return (
        <>
            <div className='vh-100'>
                {/* <div className='container'> */}
                    <div className='row' id="layout">
                        
                        <nav className='col-lg-1 col-0 '>
                            <Sidebar />
                        </nav>
                        <mainsection className='col-lg-11 col-12 warning'>
                            <NavSection />
                        </mainsection>
                        <header className='bg-white z-index d-lg-none p-3 sticky-top'>
                            <TopMenu />
                        </header>
                    </div>
                {/* </div> */}
            </div>
        </>
    )
}
