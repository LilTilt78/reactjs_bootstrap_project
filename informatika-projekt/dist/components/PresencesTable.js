import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Komponenta ShowPresences pro zobrazení seznamu přítomností.
 * @function
 * @param {Object[]} props.presences - Pole přítomností.
 * @returns {JSX.Element} Element komponenty pro zobrazení seznamu přítomností.
 */
export const ShowPresences = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "cotent-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "content-body"
  }, props.presences?.map(presence => /*#__PURE__*/React.createElement("table", {
    className: "table table-presences",
    key: presence.id
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Presence ID: ", presence.id, " "))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", null, "User Email:"), " ", presence.user.email, " ")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", null, "Invitation:"), " ", presence.invitationType.name, " ")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", null, "Presence:"), " ", presence.presenceType.name, " ")))))));
};