import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import { useSelector } from 'react-redux';
import { AddGroupInvitation } from './GroupInvitationButton';
import { AddUserInvitation } from './UserInvitationButton';
import { InviteDetail } from './InvitationDetailButton';

/**
 * Komponenta InvitationsCard pro zobrazení karet s pozvánkami.
 * @function
 * @returns {JSX.Element} Element komponenty pro zobrazení karet s pozvánkami.
 */
export const InvitationsCard = () => {
  const events = useSelector(state => state.events);
  return /*#__PURE__*/React.createElement("div", {
    className: "card",
    style: {
      width: '1000px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-header bg-dark text-light"
  }, /*#__PURE__*/React.createElement("h4", null, "Invitations Card")), /*#__PURE__*/React.createElement("table", {
    className: "table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    width: "100%",
    style: {
      backgroundColor: '#9f3'
    }
  }, "Event name:")))), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, events.map(event => /*#__PURE__*/React.createElement("table", {
    className: "table",
    key: event.id
  }, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    width: "100%"
  }, event.name), /*#__PURE__*/React.createElement(InviteDetail, {
    eventDetail: event
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement(AddUserInvitation, null), /*#__PURE__*/React.createElement(AddGroupInvitation, null))));
};