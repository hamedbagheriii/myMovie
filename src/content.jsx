import React, { useContext, useState } from 'react';
import { sideContext } from './Context/context';


const Content = ()=>{
    const {sidebar ,setSideBar} = useContext(sideContext)

    
    const handleShowMenu = (event)=>{
        event.stopPropagation();
        setSideBar(!sidebar)
    }



    return(
        <div className='container-fluid py-2 content text-white' onClick={()=>{setSideBar(false)}}>
            <div className="sideMove p-2 d-md-none">
                <button className='btn btn-primary ' onClick={handleShowMenu} >s</button>
            </div>
        </div>
    )
}

export default Content;