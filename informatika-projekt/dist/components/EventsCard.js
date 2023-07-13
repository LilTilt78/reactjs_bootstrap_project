import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import { EventDetail } from './EventDetailButton';
import { AddEvent } from './AddEventButton';
import { useSelector } from 'react-redux';

/**
 * Komponenta EventsCard pro zobrazení karet událostí.
 * @function
 * @returns {JSX.Element} Element komponenty pro zobrazení karet událostí.
 */
export const EventsCard = () => {
  const events = useSelector(state => state.events);
  return /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      width: '1000px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-header bg-dark text-light"
  }, /*#__PURE__*/React.createElement("h4", null, "Events Card")), /*#__PURE__*/React.createElement("table", {
    className: "table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    width: "20%",
    style: {
      backgroundColor: '#9f3'
    }
  }, "Name:"), /*#__PURE__*/React.createElement("td", {
    width: "20%",
    style: {
      backgroundColor: '#9f3'
    }
  }, "Type:"), /*#__PURE__*/React.createElement("td", {
    width: "30%",
    style: {
      backgroundColor: '#9f3'
    }
  }, "Start Date:"), /*#__PURE__*/React.createElement("td", {
    width: "30%",
    style: {
      backgroundColor: '#9f3'
    }
  }, "End Date:")))), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, events.map(event => /*#__PURE__*/React.createElement("table", {
    className: "table",
    key: event.id
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    width: "20%"
  }, event.name), /*#__PURE__*/React.createElement("td", {
    width: "20%"
  }, event.eventType ? event.eventType.name : ""), /*#__PURE__*/React.createElement("td", {
    width: "30%"
  }, event.startdate), /*#__PURE__*/React.createElement("td", {
    width: "30%"
  }, event.enddate), /*#__PURE__*/React.createElement(EventDetail, {
    eventDetail: event
  }))))), /*#__PURE__*/React.createElement(AddEvent, null)));
};