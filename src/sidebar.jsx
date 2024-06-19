import React from 'react';
import imgLogo from './image/user1.jpg'
import { Link, NavLink } from 'react-router-dom';

const Sidebar = ()=>{



    return(
        <div className='sidebar py-5 d-flex flex-column'>
            <div className="userBox py-4 d-flex flex-column align-items-center justify-content-center">
                <img src={imgLogo} className='img_logo' />
                <h5 className='user_title mt-3 bg-white px-2 py-1 '>حامد باقری</h5>
                <div className="provider mt-2"></div>
            </div>
            <div className="sidebar_content">
                <ul className='w-100 mb-5'>
                    <li className='nav_item w-100 mb-5 mt-2'>
                        <NavLink to={'/home'} className={({isActive})=>{return isActive ? 'NavLink_hover NavLink_active' : 'NavLink_hover' }}>
                            خانه
                        </NavLink>
                     </li>
                     <li className='nav_item w-100 mb-5'>
                        <NavLink to={'/movie'} className={({isActive})=>{return isActive ? 'NavLink_hover NavLink_active' : 'NavLink_hover' }}>
                            فیلم
                        </NavLink>
                     </li>
                     <li className='nav_item w-100 mb-5'>
                        <NavLink to={'/series'} className={({isActive})=>{return isActive ? 'NavLink_hover NavLink_active' : 'NavLink_hover' }}>
                            سریال
                        </NavLink>
                     </li>
                     <li className='nav_item w-100 mb-5'>
                        <NavLink to={'/animation'} className={({isActive})=>{return isActive ? 'NavLink_hover NavLink_active' : 'NavLink_hover' }}>
                            انیمیشن
                        </NavLink>
                     </li>
                     <li className='nav_item w-100' style={{marginTop:50}}>
                        <div className="provider mb-5 mx-auto"></div>
                        <NavLink to={'/about'} className={({isActive})=>{return isActive ? 'NavLink_hover NavLink_active' : 'NavLink_hover' }}>
                            درباره ما
                        </NavLink>
                     </li>
                </ul>
            </div>

            <div className="btn_sidebar w-100 d-flex flex-column align-items-center  justify-content-center">
                <button className='btn btn-danger mt-4'>خروج از حساب کاربری</button>
            </div>
        </div>
    )
}

export default Sidebar;