import React, { useState } from "react";
import { useSelector } from "react-redux";

/**
 * Komponenta EventTypeSelect pro výběr typu události.
 * @function
 * @param {object} OnTypeRecieve - Vstupní vlastnosti komponenty.
 * @returns {JSX.Element} Element komponenty pro výběr typu události.
 */
export const EventTypeSelect = ({
  OnTypeRecieve
}) => {
  const eventsType = useSelector(state => state.eventsType);
  const [evTypeId, setEvTypeId] = useState("");

  /**
   * Funkce pro změnu ID typu události.
   * @param {object} e - Událost změny hodnoty vstupního pole.
   */
  const evTypeIdChange = e => {
    setEvTypeId(e.target.value);
    OnTypeRecieve(e.target.value);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "content-container"
  }, /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    "aria-label": "Default select example",
    onChange: evTypeIdChange
  }, eventsType.map(eventType => /*#__PURE__*/React.createElement("option", {
    key: eventType.id,
    value: eventType.id
  }, eventType.name))));
};