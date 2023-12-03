import React from 'react'
import { FaBell, FaCalendarAlt, FaUser } from "react-icons/fa";
import { MdOutlineSms } from "react-icons/md";

export default function TopMenu() {
    return (
        <div>
            <div className='logo row border shadow'>
                <div className='col-6 mt-2 d-lg-none fs-4 fw-bold ps-2'>Arul!</div>
                <div className='col-6 col-lg-12 d-flex justify-content-evenly my-2'>
                    <div className='fs-4 icons '>
                        <FaCalendarAlt />
                        
                    </div>
                    <div className='fs-4 icons position-relative'><FaBell /><div  className='bg-danger position-absolute d-block start-100 translate-middle rounded-circle badge-style'></div></div>
                    <div className='fs-4 icons position-relative'><MdOutlineSms /><div  className='bg-danger position-absolute d-block start-100 translate-middle rounded-circle badge-style'></div></div>
                    <div className=' px-2 py-2 rounded-circle d-flex fs-4 icons'><FaUser /></div>
                </div>
            </div>
        </div>
    )
}
