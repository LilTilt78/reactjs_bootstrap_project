import React from "react";
import { useSelector } from "react-redux";
import { EventDetail } from "./EventDetailButton";

/**
 * Komponenta SvgBox pro zobrazení událostí ve formě SVG políček.
 * @function
 */
export const SvgBox = () => {
    const events = useSelector((state) => state.events);
  
    const xVal = 0;
    const initialYVal = 50; // Počáteční pozice y
    const rowHeight = 150; // Výška každého řádku
    const boxesPerRow = 4; // Počet políček na řádek
  
    return (
        <>
        <div className='container-fluid bg-dark text-light' style={{width: '1000px'}}>
          <h3>Events in SVG field</h3>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="500">
            {events.map((event, index) => {
            const row = Math.floor(index / boxesPerRow); // Výpočet indexu řádku
            const x = xVal + (index % boxesPerRow) * 250; // Výpočet pozice x
            const y = initialYVal + row * rowHeight; // Výpočet pozice y
    
            return (
                <g key={event.id}>
                <rect x={x} y={y} width="250" height="140" fill="white" stroke="black" />
                <text x={x + 125} y={y + 20} textAnchor="middle" dominantBaseline="middle" fill="black" fontSize="16" fontWeight="bold">Name: {event.name}</text>
                <text x={x + 125} y={y + 50} textAnchor="middle" dominantBaseline="middle" fill="green" fontSize="16">Start: {event.startdate}</text>
                <text x={x + 125} y={y + 80} textAnchor="middle" dominantBaseline="middle" fill="red" fontSize="16">End: {event.enddate}</text>
                <text x={x + 125} y={y + 110} textAnchor="middle" dominantBaseline="middle" fill="black" fontSize="16"><EventDetail eventDetail={event} /></text>
                </g>
            );
            })}
        </svg>
        </>
    );
  };