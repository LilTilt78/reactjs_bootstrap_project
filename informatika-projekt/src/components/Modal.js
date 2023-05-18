import React from "react";
import { useState } from 'react';
import "./Modal.css";

export const Modal = ({closeModal, onAdd}) => {

    const [formState, setFormState] = useState({
        udalost: "",
        popis: "",
        stav: "nadcházející"
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(formState)
        closeModal();
    };

    return(
        <div className="modal-container" onClick={(e) => {if(e.target.className==="modal-container")closeModal()}}>
            <div className="modal">
                <form>
                    <div className="form-group">
                        <label htmlFor="udalost">Událost</label>
                        <input name="udalost" value={formState.udalost} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="popis">Popis</label>
                        <textarea name="popis" value={formState.popis} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="stav">Stav</label>
                        <select name="stav" value={formState.stav} onChange={handleChange}>
                            <option value="nadcházející">Nadcházející</option>
                            <option value="probíhá">Probíhá</option>
                            <option value="ukončeno">Ukončeno</option>
                        </select>
                    </div>
                    <button type="submit" className="btn" onClick={handleSubmit}>Uložit</button>
                </form>
            </div>
        </div>
    );
}