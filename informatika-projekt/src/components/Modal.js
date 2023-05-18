import React from "react";
import { useState } from 'react';
import "./Modal.css";

export const Modal = ({closeModal, onAdd, defaultValue}) => {

    const [formState, setFormState] = useState(defaultValue || {
        udalost: "",
        popis: "",
        stav: "nadcházející"
    });

    const [errors, setErrors] = useState("")

    const validateForm = () => {
        if(formState.udalost && formState.popis && formState.stav){
            setErrors("")
            return true
        }
        else {
            let errorFields = [];
            for(const [key, value] of Object.entries(formState)){
                if(!value){
                    errorFields.push(key);
                }
            }
            setErrors(errorFields.join(", "));
            return false
        }
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!validateForm()) return;
        onAdd(formState);
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
                    {errors && <div className="error">{`Prosím zadejte: ${errors}`}</div>}
                    <button type="submit" className="btn" onClick={handleSubmit}>Uložit</button>
                </form>
            </div>
        </div>
    );
}