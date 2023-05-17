import React from "react";
import "./Modal.css";

export const Modal = ({closeModal}) => {
    return(
        <div className="modal-container" onClick={(e) => {if(e.target.className==="modal-container")closeModal()}}>
            <div className="modal">
                <form>
                    <div className="form-group">
                        <label htmlFor="udalost">Událost</label>
                        <input name="udalost" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="popis">Popis</label>
                        <textarea name="popis" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="stav">Stav</label>
                        <select name="stav">
                            <option value="nadchazejici">Nadcházející</option>
                            <option value="probiha">Probíhá</option>
                            <option value="ukonceno">Ukončeno</option>
                        </select>
                    </div>
                    <button type="submit" className="btn">Uložit</button>
                </form>
            </div>
        </div>
    );
}