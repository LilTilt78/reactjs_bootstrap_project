import React from "react";
import { useSelector } from "react-redux";
import { EventDetail } from "./EventDetailButton";

/**
 * Komponenta SvgSetOfEvents pro zobrazení událostí ve formě SVG tabulky.
 * Události jsou seřazeny podle data začátku.
 * @function
 */
export const SvgSetOfEvents = () => {
  let events = useSelector(state => state.events);
  // Seřazení událostí podle data začátku
  events = events.slice().sort(function (a, b) {
    const startA = new Date(a.startdate);
    const startB = new Date(b.startdate);
    return startA - startB;
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "container-fluid bg-dark text-light",
    style: {
      width: '1000px'
    }
  }, /*#__PURE__*/React.createElement("h3", null, "Set Of Events on SVG Table")), /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1000",
    height: `${100 + events.length * 40}`
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "0",
    width: "1000",
    height: `${100 + events.length * 40}`,
    fill: "none",
    stroke: "black"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "1",
    width: "199",
    height: "29",
    fill: "#9f3"
  }), /*#__PURE__*/React.createElement("text", {
    x: "10",
    y: "20",
    fontWeight: "bold"
  }, "Start Date: "), /*#__PURE__*/React.createElement("rect", {
    x: "200",
    y: "1",
    width: "199",
    height: "29",
    fill: "#9f3"
  }), /*#__PURE__*/React.createElement("text", {
    x: "210",
    y: "20",
    fontWeight: "bold"
  }, "End Date:"), /*#__PURE__*/React.createElement("rect", {
    x: "400",
    y: "1",
    width: "199",
    height: "29",
    fill: "#9f3"
  }), /*#__PURE__*/React.createElement("text", {
    x: "410",
    y: "20",
    fontWeight: "bold"
  }, "Name: "), /*#__PURE__*/React.createElement("rect", {
    x: "600",
    y: "1",
    width: "199",
    height: "29",
    fill: "#9f3"
  }), /*#__PURE__*/React.createElement("text", {
    x: "610",
    y: "20",
    fontWeight: "bold"
  }, "Type: "), /*#__PURE__*/React.createElement("rect", {
    x: "800",
    y: "1",
    width: "199",
    height: "29",
    fill: "#9f3"
  }), /*#__PURE__*/React.createElement("text", {
    x: "810",
    y: "20",
    fontWeight: "bold"
  }, "Detail: "), /*#__PURE__*/React.createElement("line", {
    x1: "200",
    y1: "0",
    x2: "200",
    y2: `${100 + events.length * 40}`,
    stroke: "black"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "400",
    y1: "0",
    x2: "400",
    y2: `${100 + events.length * 40}`,
    stroke: "black"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "600",
    y1: "0",
    x2: "600",
    y2: `${100 + events.length * 40}`,
    stroke: "black"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "800",
    y1: "0",
    x2: "800",
    y2: `${100 + events.length * 40}`,
    stroke: "black"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "30",
    x2: "1000",
    y2: "30",
    stroke: "black"
  }), events.map((event, index) => {
    const y = 20 + (index + 1) * 40;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: event.id
    }, /*#__PURE__*/React.createElement("text", {
      x: "10",
      y: y,
      fill: "green",
      fontWeight: "bold"
    }, event.startdate), /*#__PURE__*/React.createElement("text", {
      x: "210",
      y: y,
      fill: "red",
      fontweight: "bold"
    }, event.enddate), /*#__PURE__*/React.createElement("text", {
      x: "410",
      y: y,
      fill: "black"
    }, event.name), /*#__PURE__*/React.createElement("text", {
      x: "610",
      y: y
    }, event.eventType ? event.eventType.name : ""), /*#__PURE__*/React.createElement("text", {
      x: "810",
      y: y
    }, /*#__PURE__*/React.createElement(EventDetail, {
      eventDetail: event
    })), /*#__PURE__*/React.createElement("line", {
      x1: "0",
      y1: y + 10,
      x2: "1000",
      y2: y + 10,
      stroke: "black"
    }));
  })));
};