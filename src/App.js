import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import swal from 'sweetalert';
import Sidebar from './sidebar';
import Content from './content';
import './styles/style.css';
import {sideContext} from './Context/context'

const App = ()=>{
    const [sidebar , setSideBar] = useState(false)



    return(
        <BrowserRouter>
            <div className='main d-flex flex-row '>
            <sideContext.Provider value={{sidebar ,setSideBar}}>
                <Sidebar/>
                <Content/>
            </sideContext.Provider >
            </div>
        </BrowserRouter>
    )
}


export default App; 