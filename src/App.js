import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import swal from 'sweetalert';
import Sidebar from './sidebar';
import Content from './content';
import './styles/style.css';


const App = ()=>{



    return(
        <BrowserRouter>
            <div className='main d-flex flex-row '>
                <Sidebar/>
                <Content/>
            </div>
        </BrowserRouter>
    )
}


export default App; 