import React from "react";
import "./Table.css";
import {BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs'

export const Table = ({rows, deleteRow, editRow}) => {
    return (
        <div className="table-wrapper">
            {/* <EventSelect /> */}
            <table className="table-udalosti">
                <thead>
                    <tr>
                        <th>Název</th>
                        <th className="expand">Popis události</th>
                        <th>Stav</th>
                        <th>Akce</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((row, idx) => {
                            const stavText = row.stav.charAt(0).toUpperCase()+row.stav.slice(1);    // předělání prvního písmena na velké
                            return <tr key={idx}>
                                <td>{row.udalost}</td>
                                <td className="expand">{row.popis}</td>
                                <td>
                                <span className={`label label-${row.stav}`}>{stavText}</span>
                                </td>
                                <td>
                                    <span className="actions">
                                        <BsFillTrashFill className="btn-delete" onClick={() => deleteRow(idx)}/>
                                        <BsFillPencilFill className="btn-customize" onClick={() => editRow(idx)}/>
                                    </span>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}