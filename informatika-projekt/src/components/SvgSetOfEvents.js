import React from "react";
import { useSelector } from "react-redux";
import { EventDetail } from "./EventDetailButton";

export const SvgSetOfEvents = () => {
    let events = useSelector((state) => state.events);

    events = events.slice().sort(function(a, b){const startA = new Date(a.startdate); const startB = new Date(b.startdate); return startA - startB});

    return (
      <>
        <div className='container-fluid bg-dark text-light' style={{width: '1000px'}}>
          <h3>Set Of Events on SVG Table</h3>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="1000" height={`${100 + events.length * 40}`}>
          <rect x="0" y="0" width="1000" height={`${100 + events.length * 40}`} fill="none" stroke="black" />
  
          <rect x="1" y="1" width="199" height="29" fill="#9f3" />
          <text x="10" y="20" fontWeight="bold">Start Date: </text>
          <rect x="200" y="1" width="199" height="29" fill="#9f3" />
          <text x="210" y="20" fontWeight="bold">End Date:</text>
          <rect x="400" y="1" width="199" height="29" fill="#9f3" />
          <text x="410" y="20" fontWeight="bold">Name: </text>
          <rect x="600" y="1" width="199" height="29" fill="#9f3" />
          <text x="610" y="20" fontWeight="bold">Type: </text>
          <rect x="800" y="1" width="199" height="29" fill="#9f3" />
          <text x="810" y="20" fontWeight="bold">Detail: </text>
  
          <line x1="200" y1="0" x2="200" y2={`${100 + events.length * 40}`} stroke="black" />
          <line x1="400" y1="0" x2="400" y2={`${100 + events.length * 40}`} stroke="black" />
          <line x1="600" y1="0" x2="600" y2={`${100 + events.length * 40}`} stroke="black" />
          <line x1="800" y1="0" x2="800" y2={`${100 + events.length * 40}`} stroke="black" />
          <line x1="0" y1="30" x2="1000" y2="30" stroke="black" />
  
          {events.map((event, index) => {
            const y = 20 + (index + 1) * 40;
            return (
              <React.Fragment key={event.id}>
                <text x="10" y={y} fill="green" fontWeight="bold">{event.startdate}</text>
                <text x="210" y={y} fill="red" fontweight="bold">{event.enddate}</text>
                <text x="410" y={y} fill="black">{event.name}</text>
                <text x="610" y={y}>{event.eventType? event.eventType.name : ""}</text>
                <text x="810" y={y}><EventDetail eventDetail={event} /></text>
                <line x1="0" y1={y + 10} x2="1000" y2={y + 10} stroke="black" />
              </React.Fragment>
            );
          })}
        </svg>
      </>
    );
  };