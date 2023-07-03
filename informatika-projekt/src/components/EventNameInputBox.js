import React, { useState } from "react";

export const EventNameInput = ({OnNameRecieve}) => {

    const [evName, setEvName] = useState("");

    const evNameChange = (e) =>{
        setEvName(e.target.value)
        OnNameRecieve(e.target.value)
    }

    return (
        <div className='content-container'>
                <label className="col-form-label">Name:</label>
                <input type="text" className="form-control" id="evName" value={evName} onChange={evNameChange}></input>
        </div>
    );
}