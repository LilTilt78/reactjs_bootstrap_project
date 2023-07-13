import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { changeDetail } from '../features/EventDisplaySlice';

/**
 * Komponenta InviteDetail pro zobrazení detailů pozvánky.
 * @function
 * @param {object} eventDetail - Detaily události.
 * @returns {JSX.Element} Element komponenty pro zobrazení detailů pozvánky.
 */
export const InviteDetail = ({
  eventDetail
}) => {
  const event = useSelector(state => state.eventDetail);
  const dispatch = useDispatch();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-dark",
    "data-bs-toggle": "modal",
    href: "#detailEventInvitationModal",
    role: "button",
    onClick: () => {
      dispatch(changeDetail(eventDetail));
    }
  }, "Detail"), /*#__PURE__*/React.createElement("div", {
    className: "modal fade",
    id: "detailEventInvitationModal",
    "aria-hidden": "true",
    "aria-labelledby": "detailEventInvitationModalLabel",
    tabIndex: "-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-dialog modal-dialog-centered"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "modal-title",
    id: "detailEventInvitationModalLabel"
  }, "Invitation Detail"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn-close",
    "data-bs-dismiss": "modal",
    "aria-label": "Close"
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    className: "col-form-label"
  }, "Name of the event:"), /*#__PURE__*/React.createElement("label", {
    type: "text",
    className: "form-control"
  }, event.name)), /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    className: "col-form-label"
  }, "Presences:"), event.presences?.map(presence => /*#__PURE__*/React.createElement("table", {
    className: "table table-presences",
    key: presence.id
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, presence.user.name, " ", presence.user.surname))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", null, "Email: "), presence.user.email)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", null, "Invitation: "), presence.invitationType.name, /*#__PURE__*/React.createElement("span", null, ", Presence: "), presence.presenceType.name)))))))), /*#__PURE__*/React.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-bs-dismiss": "modal"
  }, "Close"))))));
};