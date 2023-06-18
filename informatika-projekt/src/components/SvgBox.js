import { event } from "jquery";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { EventDetail } from "./EventDetailButton";

export const SvgBox = () => {
    const events = useSelector((state) => state.events);
  
    const xVal = 0;
    const initialYVal = 50; // Initial y position
    const rowHeight = 150; // Height of each row
    const boxesPerRow = 4; // Number of boxes per row
  
    return (
        <>
        <div className='container-fluid bg-dark text-light' style={{width: '1000px'}}>
          <h3>Events in SVG field</h3>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="1000" height="500">
            {events.map((event, index) => {
            const row = Math.floor(index / boxesPerRow); // Calculate the row index
            const x = xVal + (index % boxesPerRow) * 250; // Calculate the x position
            const y = initialYVal + row * rowHeight; // Calculate the y position
    
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