import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { EventsTypeFetchAsync } from '../actions/FetchEventsType';
import { SaveAddedEvent } from './SaveAddedEventButton';
import { EventNameInput } from './EventNameInputBox';
import { EventTypeSelect } from './EventTypeSelect';

/**
 * Komponenta AddEvent pro přidání události.
 * @function
 */
export const AddEvent = () => {
  const dispatch = useDispatch();
  const [evStartDate, setEvStartDate] = useState("2023-05-24T10:00");
  const [evEndDate, setEvEndDate] = useState("2023-05-24T11:00");
  const [evTypeId, setEvTypeId] = useState("");
  const [evName, setEvName] = useState("");

  /**
   * Funkce pro změnu počátečního data události.
   * @param {object} e - Událost změny hodnoty vstupního pole.
   */
  const evStartDateChange = e => {
    setEvStartDate(e.target.value);
  };

  /**
   * Funkce pro změnu koncového data události.
   * @param {object} e - Událost změny hodnoty vstupního pole.
   */
  const evEndDateChange = e => {
    setEvEndDate(e.target.value);
  };

  /**
   * Funkce pro přijetí názvu události z komponenty EventNameInput.
   * @param {string} evName - Název události.
   */
  const OnNameRecieve = evName => {
    setEvName(evName);
  };

  /**
   * Funkce pro přijetí typu události z komponenty EventTypeSelect.
   * @param {string} evType - Typ události.
   */
  const OnTypeRecieve = evType => {
    setEvTypeId(evType);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
    className: "btn",
    style: {
      backgroundColor: '#9f3'
    },
    "data-bs-toggle": "modal",
    href: "#addEventModal",
    role: "button",
    onClick: () => {
      dispatch(EventsTypeFetchAsync());
    }
  }, "Add Event"), /*#__PURE__*/React.createElement("div", {
    className: "modal fade",
    id: "addEventModal",
    "aria-hidden": "true",
    "aria-labelledby": "addEventModalLabel",
    tabIndex: "-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-dialog modal-dialog-centered"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "modal-title",
    id: "addEventModalLabel"
  }, "Add Event"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn-close",
    "data-bs-dismiss": "modal",
    "aria-label": "Close"
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement(EventNameInput, {
    OnNameRecieve: OnNameRecieve
  })), /*#__PURE__*/React.createElement("label", {
    className: "col-form-label"
  }, "Choose Event Type:"), /*#__PURE__*/React.createElement(EventTypeSelect, {
    OnTypeRecieve: OnTypeRecieve
  }), /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    className: "col-form-label"
  }, "Start date:"), /*#__PURE__*/React.createElement("input", {
    type: "datetime-local",
    className: "form-control",
    id: "evStartDate",
    value: evStartDate,
    onChange: evStartDateChange
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    className: "col-form-label"
  }, "End date:"), /*#__PURE__*/React.createElement("input", {
    type: "datetime-local",
    className: "form-control",
    id: "evEndDate",
    value: evEndDate,
    onChange: evEndDateChange
  })))), /*#__PURE__*/React.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-bs-dismiss": "modal"
  }, "Close"), /*#__PURE__*/React.createElement(SaveAddedEvent, {
    name: evName,
    typeId: evTypeId,
    startDate: evStartDate,
    endDate: evEndDate
  }))))));
};