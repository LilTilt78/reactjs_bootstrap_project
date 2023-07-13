import { useSelector } from 'react-redux';
import React, { useState } from "react";
import { SaveAddedInvitation2 } from './SaveAddedInvitation2Button';

/**
 * Komponenta AddGroupInvitation pro přidání pozvánky pro skupinu.
 * @function
 * @returns {JSX.Element} Element komponenty pro přidání pozvánky pro skupinu.
 */
export const AddGroupInvitation = () => {
  const events = useSelector(state => state.events);
  const groups = useSelector(state => state.groups);
  const [eventId, setEvId] = useState("");
  const [groupId, setGroupId] = useState("");

  /**
   * Funkce pro změnu ID události.
   * @param {object} e - Událost změny hodnoty vstupního pole.
   */
  const evIdChange = e => {
    setEvId(e.target.value);
  };

  /**
   * Funkce pro změnu ID skupiny.
   * @param {object} e - Událost změny hodnoty vstupního pole.
   */
  const groupIdChange = e => {
    setGroupId(e.target.value);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
    className: "btn",
    style: {
      backgroundColor: '#9f3'
    },
    "data-bs-toggle": "modal",
    href: "#addGroupInvitationModal",
    role: "button"
  }, "Invite Group"), /*#__PURE__*/React.createElement("div", {
    className: "modal fade",
    id: "addGroupInvitationModal",
    "aria-hidden": "true",
    "aria-labelledby": "addGroupInvitationModalLabel",
    tabIndex: "-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-dialog modal-dialog-centered"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "modal-title",
    id: "addGroupInvitationModalLabel"
  }, "Add Invitation to Presence"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn-close",
    "data-bs-dismiss": "modal",
    "aria-label": "Close"
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("label", {
    className: "col-form-label"
  }, "Event:"), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    "aria-label": "Default select example",
    onChange: evIdChange
  }, /*#__PURE__*/React.createElement("option", {
    disabled: true,
    selected: true
  }, "Choose event"), events.map(event => /*#__PURE__*/React.createElement("option", {
    key: event.id,
    value: event.id
  }, event.name)))), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("label", {
    className: "col-form-label"
  }, "Groups:"), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    "aria-label": "Default select example",
    onChange: groupIdChange
  }, /*#__PURE__*/React.createElement("option", {
    disabled: true,
    selected: true
  }, "Choose group/groups"), groups?.map(group => /*#__PURE__*/React.createElement("option", {
    key: group.id,
    value: group.id
  }, group.name))))), /*#__PURE__*/React.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-bs-dismiss": "modal"
  }, "Close"), /*#__PURE__*/React.createElement(SaveAddedInvitation2, {
    eventId: eventId,
    groupId: groupId
  }))))));
};