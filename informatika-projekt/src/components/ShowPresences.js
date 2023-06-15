import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import React, { useState } from "react";
import {ShowPresences} from './PresencesTable';

export const ShowPresences2= (props) => {

    const [tableData, setTableData] = useState(props)

    const exportData = () => {
        setTableData(props)
    }

    return (
        <div className='container'>
            <button onClick={exportData}>Show Presences</button>
            <ShowPresences props />
        </div>
    )
}