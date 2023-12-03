import React, { useState } from 'react'
import {  FaChartLine } from "react-icons/fa";
import {  IoDocument, IoSettingsOutline, IoPower } from "react-icons/io5";
import {  FaUsers } from "react-icons/fa6";
import { RiLayoutMasonryFill } from "react-icons/ri";
import Card from 'react-bootstrap/Card';


export default function Sidebar() {
    const menuItemList = [
        {
            icon: <RiLayoutMasonryFill />,
            iconName: 'RiLayoutMasonryFill'
        },
        {
            icon: <FaChartLine />,
            iconName: 'FaChartLine'
        },
        {
            icon: <FaUsers />,
            iconName: 'FaUsers'
        },
        {
            icon: <IoDocument />,
            iconName: 'IoDocument'
        },
        {
            icon: <IoSettingsOutline />,
            iconName: 'IoSettingsOutline'
        }
    ]

    const [activeMenuItem, setActiveMenuItem] = useState('');

  const toggleMenuItem = (name) => {
    setActiveMenuItem(name === activeMenuItem ? '' : name);
  };

    return (
        <>
            <section className='sticky-top'>
                <div className=''>
                    <Card className='min-vh-100 w-75 m-auto d-flex justify-content-center align-items-center gap-4 fs-5 light-purple-bg' id='sidebar_wrapper'>

                        {menuItemList.map((currentValue, menuIndex) => (
                            <div
                                key={menuIndex}
                                className={`w-100 text-center linkicons ${activeMenuItem === currentValue.iconName ? 'linkicons_active' : ''}`}
                                onClick={() => toggleMenuItem(currentValue.iconName)}
                            >
                                {currentValue.icon}
                            </div>
                        ))}
                        {/* <div className='w-100 text-center linkicons'><RiLayoutMasonryFill  onClick={toggleMenuItem('RiLayoutMasonryFill')} /></div>
                  <div><FaChartLine  onClick={toggleMenuItem()}/></div>
                  <div><FaUsers onClick={toggleMenuItem()} /></div>
                  <div><IoDocument onClick={toggleMenuItem()} /></div>
                  <div><IoSettingsOutline onClick={toggleMenuItem()} /></div>*/}
                        <div className='position-absolute bottom-0 pb-4 linkicons ' id="logout"><IoPower /></div>
                    </Card>

                </div>
            </section>
        </>
    )
}
