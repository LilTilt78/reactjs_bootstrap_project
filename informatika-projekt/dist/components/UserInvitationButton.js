import { useSelector } from 'react-redux';
import React, { useState } from "react";
import { SaveAddedInvitation } from './SaveAddedInvitationButton';

/**
 * Komponenta AddUserInvitation pro přidání uživatelské pozvánky.
 * Komponenta zobrazuje formulář pro výběr události a uživatele, a následně volá příslušnou akci pro přidání pozvánky.
 * @function
 */
export const AddUserInvitation = () => {
  const events = useSelector(state => state.events);
  const users = useSelector(state => state.users);
  const [eventId, setEvId] = useState("");
  const [userId, setUserId] = useState("");

  /**
  * Funkce pro změnu vybraného ID události.
  * @param {Object} e - Událost změny hodnoty ve formuláři.
  */
  const evIdChange = e => {
    setEvId(e.target.value);
  };

  /**
  * Funkce pro změnu vybraného ID uživatele.
  * @param {Object} e - Událost změny hodnoty ve formuláři.
  */
  const userIdChange = e => {
    setUserId(e.target.value);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
    className: "btn",
    style: {
      backgroundColor: '#9f3'
    },
    "data-bs-toggle": "modal",
    href: "#addUserInvitationModal",
    role: "button"
  }, "Invite User"), /*#__PURE__*/React.createElement("div", {
    className: "modal fade",
    id: "addUserInvitationModal",
    "aria-hidden": "true",
    "aria-labelledby": "addInvitationModalLabel",
    tabIndex: "-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-dialog modal-dialog-centered"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "modal-title",
    id: "addUserInvitationModalLabel"
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
  }, "Users:"), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    "aria-label": "Default select example",
    onChange: userIdChange
  }, /*#__PURE__*/React.createElement("option", {
    disabled: true,
    selected: true
  }, "Choose user"), users.map(user => /*#__PURE__*/React.createElement("option", {
    key: user.id,
    value: user.id
  }, user.name, " ", user.surname))))), /*#__PURE__*/React.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-bs-dismiss": "modal"
  }, "Close"), /*#__PURE__*/React.createElement(SaveAddedInvitation, {
    eventId: eventId,
    userId: userId
  }))))));
};