import React from "react";
import { useSelector } from "react-redux";
import { EventDetail } from "./EventDetailButton";

/**
 * Komponenta SvgBox pro zobrazení událostí ve formě SVG políček.
 * @function
 */
export const SvgBox = () => {
  const events = useSelector(state => state.events);
  const xVal = 0;
  const initialYVal = 50; // Počáteční pozice y
  const rowHeight = 150; // Výška každého řádku
  const boxesPerRow = 4; // Počet políček na řádek

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "container-fluid bg-dark text-light",
    style: {
      width: '1000px'
    }
  }, /*#__PURE__*/React.createElement("h3", null, "Events in SVG field")), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1000",
    height: "500"
  }, events.map((event, index) => {
    const row = Math.floor(index / boxesPerRow); // Výpočet indexu řádku
    const x = xVal + index % boxesPerRow * 250; // Výpočet pozice x
    const y = initialYVal + row * rowHeight; // Výpočet pozice y

    return /*#__PURE__*/React.createElement("g", {
      key: event.id
    }, /*#__PURE__*/React.createElement("rect", {
      x: x,
      y: y,
      width: "250",
      height: "140",
      fill: "white",
      stroke: "black"
    }), /*#__PURE__*/React.createElement("text", {
      x: x + 125,
      y: y + 20,
      textAnchor: "middle",
      dominantBaseline: "middle",
      fill: "black",
      fontSize: "16",
      fontWeight: "bold"
    }, "Name: ", event.name), /*#__PURE__*/React.createElement("text", {
      x: x + 125,
      y: y + 50,
      textAnchor: "middle",
      dominantBaseline: "middle",
      fill: "green",
      fontSize: "16"
    }, "Start: ", event.startdate), /*#__PURE__*/React.createElement("text", {
      x: x + 125,
      y: y + 80,
      textAnchor: "middle",
      dominantBaseline: "middle",
      fill: "red",
      fontSize: "16"
    }, "End: ", event.enddate), /*#__PURE__*/React.createElement("text", {
      x: x + 125,
      y: y + 110,
      textAnchor: "middle",
      dominantBaseline: "middle",
      fill: "black",
      fontSize: "16"
    }, /*#__PURE__*/React.createElement(EventDetail, {
      eventDetail: event
    })));
  })));
};