import React, { useState } from "react";

/**
 * Komponenta EventNameInput pro vstup názvu události.
 * @function
 * @param {object} OnNameRecieve - Vstupní vlastnosti komponenty.
 * @returns {JSX.Element} Element komponenty pro vstup názvu události.
 */
export const EventNameInput = ({ OnNameRecieve }) => {
    const [evName, setEvName] = useState("");

    /**
     * Funkce pro změnu názvu události.
     * @param {object} e - Událost změny hodnoty vstupního pole.
     */
    const evNameChange = (e) => {
        setEvName(e.target.value);
        OnNameRecieve(e.target.value);
    };

    return (
        <div className='content-container'>
                <label className="col-form-label">Name:</label>
                <input type="text" className="form-control" id="evName" value={evName} onChange={evNameChange}></input>
        </div>
    );
}