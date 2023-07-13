import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import React, { useState } from "react";
import { ShowPresences } from './PresencesTable';
import { EventsEdit } from '../components/EditEventButton';
import { useDispatch, useSelector } from 'react-redux';
import { changeDetail } from '../features/EventDisplaySlice';

/**
 * Komponenta EventDetail pro zobrazení detailu události.
 * @function
 * @param {object} eventDetail - Detail události.
 * @returns {JSX.Element} Element komponenty pro zobrazení detailu události.
 */
export const EventDetail = ({
  eventDetail
}) => {
  const event = useSelector(state => state.eventDetail);
  const dispatch = useDispatch();
  const [evId, setEvId] = useState("");
  const [evName, setEvName] = useState("");
  const [evLastChange, setEvLastChange] = useState("");
  const [evStartDate, setEvStartDate] = useState("");
  const [evEndDate, setEvEndDate] = useState("");

  /**
   * Funkce pro nastavení hodnot pro úpravu události.
   * @returns {Promise<void>} Slouží pro nastavení hodnot pro úpravu události.
   */
  const setValues = async () => {
    setEvId(event.id);
    setEvName(event.name);
    setEvLastChange(event.lastchange);
    setEvStartDate(event.startdate);
    setEvEndDate(event.enddate);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-dark",
    "data-bs-toggle": "modal",
    href: "#detailEventModal",
    role: "button",
    onClick: () => {
      dispatch(changeDetail(eventDetail));
    }
  }, "Detail"), /*#__PURE__*/React.createElement("div", {
    className: "modal fade",
    id: "detailEventModal",
    "aria-hidden": "true",
    "aria-labelledby": "detailEventModalLabel",
    tabIndex: "-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-dialog modal-dialog-centered"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "modal-title",
    id: "detailEventModalLabel"
  }, "Event Detail"), /*#__PURE__*/React.createElement("button", {
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
  }, "ID:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    id: "evId",
    value: event.id
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    className: "col-form-label"
  }, "Name:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    id: "evName",
    value: event.name
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    className: "col-form-label"
  }, "Type:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    id: "evTypeName",
    value: event.eventType ? event.eventType.name : ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    className: "col-form-label"
  }, "Last change:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    id: "evLastChange",
    value: event.lastchange
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    className: "col-form-label"
  }, "Start date:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    id: "evStartDate",
    value: event.startdate
  })), /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    className: "col-form-label"
  }, "End date:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    id: "evEndDate",
    value: event.enddate
  })))), /*#__PURE__*/React.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-bs-dismiss": "modal"
  }, "Close"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-warning",
    "data-bs-target": "#editEventModal",
    "data-bs-toggle": "modal",
    "data-bs-dismiss": "modal",
    onClick: setValues
  }, "Edit"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dark",
    "data-bs-target": "#presencesEventModal",
    "data-bs-toggle": "modal",
    "data-bs-dismiss": "modal"
  }, "Show presences"))))), /*#__PURE__*/React.createElement("div", {
    className: "modal fade",
    id: "editEventModal",
    "aria-hidden": "true",
    "aria-labelledby": "editEventModalLabel",
    tabIndex: "-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-dialog modal-dialog-centered"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "modal-title",
    id: "editEventModalLabel"
  }, "Event Editation"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn-close",
    "data-bs-dismiss": "modal",
    "aria-label": "Close"
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement(EventsEdit, {
    evEditId: event.id,
    evEditName: event.name,
    evEditType: event.eventType,
    evEditLastChange: event.lastchange,
    evEditStartDate: event.startdate,
    evEditEndDate: event.enddate
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary",
    "data-bs-target": "#detailEventModal",
    "data-bs-toggle": "modal",
    "data-bs-dismiss": "modal"
  }, "Back"))))), /*#__PURE__*/React.createElement("div", {
    className: "modal fade",
    id: "presencesEventModal",
    "aria-hidden": "true",
    "aria-labelledby": "presencesEventModal",
    tabndex: "-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-dialog modal-dialog-centered"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "modal-title",
    id: "presencesEventModal"
  }, "Event Editation"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn-close",
    "data-bs-dismiss": "modal",
    "aria-label": "Close"
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement(ShowPresences, {
    presences: event.presences
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary",
    "data-bs-target": "#detailEventModal",
    "data-bs-toggle": "modal",
    "data-bs-dismiss": "modal"
  }, "Back"))))));
};