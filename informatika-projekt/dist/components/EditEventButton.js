import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { SaveEditedEvent } from './SaveEditedEventButton';
import { EventsTypeFetchAsync } from '../actions/FetchEventsType';

/**
 * Komponenta EventsEdit pro úpravu událostí.
 * @function
 * @param {object} props - Vstupní vlastnosti komponenty.
 * @returns {JSX.Element} Element komponenty pro úpravu událostí.
 */
export const EventsEdit = props => {
  const eventsType = useSelector(state => state.eventsType);
  const dispatch = useDispatch();
  const [evId, setEvId] = useState("");
  const [evName, setEvName] = useState("");
  const [evTypeId, setEvTypeId] = useState("");
  const [evLastChange, setEvLastChange] = useState("");
  const [evStartDate, setEvStartDate] = useState("");
  const [evEndDate, setEvEndDate] = useState("");

  /**
   * Funkce pro změnu názvu události.
   * @param {object} e - Událost změny hodnoty vstupního pole.
   */
  const evNameChange = e => {
    setEvName(e.target.value);
    setEvId(props.evEditId);
    setEvLastChange(props.evEditLastChange);
    evStartDate ? setEvStartDate(evStartDate) : setEvStartDate(props.evEditStartDate);
    evEndDate ? setEvEndDate(evEndDate) : setEvEndDate(props.evEditEndDate);
    evTypeId ? setEvTypeId(evTypeId) : setEvTypeId(props.evEditType.id);
  };

  /**
   * Funkce pro změnu typu události.
   * @param {object} e - Událost změny hodnoty vstupního pole.
   */
  const evTypeIdChange = e => {
    setEvTypeId(e.target.value);
    setEvId(props.evEditId);
    setEvLastChange(props.evEditLastChange);
    evName ? setEvName(evName) : setEvName(props.evEditName);
    evStartDate ? setEvStartDate(evStartDate) : setEvStartDate(props.evEditStartDate);
    evEndDate ? setEvEndDate(evEndDate) : setEvEndDate(props.evEditEndDate);
  };

  /**
   * Funkce pro změnu počátečního data události.
   * @param {object} e - Událost změny hodnoty vstupního pole.
   */
  const evStartDateChange = e => {
    setEvStartDate(e.target.value);
    setEvId(props.evEditId);
    setEvLastChange(props.evEditLastChange);
    evName ? setEvName(evName) : setEvName(props.evEditName);
    evEndDate ? setEvEndDate(evEndDate) : setEvEndDate(props.evEditEndDate);
    evTypeId ? setEvTypeId(evTypeId) : setEvTypeId(props.evEditType.id);
  };

  /**
   * Funkce pro změnu koncového data události.
   * @param {object} e - Událost změny hodnoty vstupního pole.
   */
  const evEndDateChange = e => {
    setEvEndDate(e.target.value);
    setEvId(props.evEditId);
    setEvLastChange(props.evEditLastChange);
    evName ? setEvName(evName) : setEvName(props.evEditName);
    evStartDate ? setEvStartDate(evStartDate) : setEvStartDate(props.evEditStartDate);
    evTypeId ? setEvTypeId(evTypeId) : setEvTypeId(props.evEditType.id);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "cotent-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "content-body"
  }, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    className: "col-form-label"
  }, "ID:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    id: "evID",
    value: props.evEditId
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    className: "col-form-label"
  }, "Name:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    id: "evName",
    value: evName ? evName : props.evEditName,
    onChange: evNameChange
  })), /*#__PURE__*/React.createElement("label", {
    className: "col-form-label"
  }, "Type:"), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    "aria-label": "Default select example",
    onClick: () => {
      dispatch(EventsTypeFetchAsync());
    },
    onChange: evTypeIdChange
  }, /*#__PURE__*/React.createElement("option", {
    selected: true
  }, props.evEditType ? props.evEditType.name : ""), eventsType.map(eventType => /*#__PURE__*/React.createElement("option", {
    key: eventType.id,
    value: eventType.id
  }, eventType.name))), /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    className: "col-form-label"
  }, "Last change:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    id: "evLastChange",
    value: props.evEditLastChange
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    className: "col-form-label"
  }, "Start date:"), /*#__PURE__*/React.createElement("input", {
    type: "datetime-local",
    className: "form-control",
    id: "evStartDate",
    value: evStartDate ? evStartDate : props.evEditStartDate,
    onChange: evStartDateChange
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    className: "col-form-label"
  }, "End date:"), /*#__PURE__*/React.createElement("input", {
    type: "datetime-local",
    className: "form-control",
    id: "evEndDate",
    value: evEndDate ? evEndDate : props.evEditEndDate,
    onChange: evEndDateChange
  })))), /*#__PURE__*/React.createElement("div", {
    className: "content-footer"
  }, /*#__PURE__*/React.createElement(SaveEditedEvent, {
    evId: evId,
    evLastChange: evLastChange,
    evName: evName,
    evStartDate: evStartDate,
    evEndDate: evEndDate,
    evTypeId: evTypeId
  }))));
};