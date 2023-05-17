import React from "react";
import "./Table.css";
import {BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs'

export const Table = ({rows}) => {
    return (
        <div className="table-wrapper">
            <table className="table">
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
                            return <tr key={idx}>
                                <td>{row.udalost}</td>
                                <td className="expand">{row.popis}</td>
                                <td>
                                <span className={'label label-${row.status}'}>{row.stav}</span>
                                </td>
                            </tr>
                        })
                    }
                    <tr>
                        <td>Vysvědčení</td>
                        <td>Toto popisuje událost "Vysvědčení"</td>
                        <td>
                            <span className="label label-nadchazejici">Nadcházející</span>  
                        </td>
                        <td>
                            <span className="actions">
                                <BsFillTrashFill className="btn-delete"/>
                                <BsFillPencilFill className="btn-customize"/>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>Sportovní týden</td>
                        <td>Toto popisuje událost "Sportovní týden"</td>
                        <td>
                            <span className="label label-ukonceno">Ukončeno</span>
                        </td>
                        <td>
                            <span className="actions">
                                <BsFillTrashFill className="btn-delete"/>
                                <BsFillPencilFill className="btn-customize"/>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>Focení</td>
                        <td>Toto popisuje událost "Focení"</td>
                        <td>
                            <span className="label label-probiha">Probíhá</span>
                        </td>
                        <td>
                            <span className="actions">
                                <BsFillTrashFill className="btn-delete"/>
                                <BsFillPencilFill className="btn-customize"/>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}