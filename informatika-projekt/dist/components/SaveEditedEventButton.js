import { EventsMutation } from '../queries/EventsMutation';

/**
 * Komponenta SaveEditedEvent pro uložení upravené události.
 * @function
 * @param {string} evId - ID události.
 * @param {string} evLastChange - Poslední změna události.
 * @param {string} evName - Nový název události.
 * @param {string} evStartDate - Nové datum a čas začátku události.
 * @param {string} evEndDate - Nové datum a čas konce události.
 * @param {string} evTypeId - Nový typ události.
 */
export const SaveEditedEvent = ({
  evId,
  evLastChange,
  evName,
  evStartDate,
  evEndDate,
  evTypeId
}) => {
  /**
  * Funkce pro uložení upravené události.
  * @async
  */
  const handleEditEvent = async () => {
    try {
      await EventsMutation({
        id: evId,
        lastchange: evLastChange,
        newName: evName,
        startDate: evStartDate,
        endDate: evEndDate,
        typeId: evTypeId
      });
      alert("Změna úspěšně proběhla");
    } catch (error) {
      console.error("Adding error", error);
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    className: "btn btn-success",
    "data-bs-dismiss": "modal",
    onClick: handleEditEvent
  }, "Save");
};