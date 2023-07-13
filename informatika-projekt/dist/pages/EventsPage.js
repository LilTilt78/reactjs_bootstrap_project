import { EventsLoader } from '../actions/EventsDataLoaderButton';
import { EventsCard } from '../components/EventsCard';
import { SvgBox } from '../components/SvgBox';
import { InvitationsCard } from '../components/InvitationsCard';
import { SvgSetOfEvents } from '../components/SvgSetOfEvents';

/**
 * Komponenta EventsPage pro stránku událostí.
 * @function 
 */
export const EventsPage = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "container-fluid bg-dark text-light text-center"
  }, /*#__PURE__*/React.createElement("h1", null, "Event Page")), /*#__PURE__*/React.createElement("div", {
    className: "container text-center p-2"
  }, /*#__PURE__*/React.createElement(EventsLoader, null)), /*#__PURE__*/React.createElement("div", {
    className: "container my-5 d-flex align-items-center justify-content-center"
  }, /*#__PURE__*/React.createElement(EventsCard, null)), /*#__PURE__*/React.createElement(SvgBox, null), /*#__PURE__*/React.createElement(SvgSetOfEvents, null), /*#__PURE__*/React.createElement("div", {
    className: "container my-5 d-flex align-items-center justify-content-center"
  }, /*#__PURE__*/React.createElement(InvitationsCard, null)));
};