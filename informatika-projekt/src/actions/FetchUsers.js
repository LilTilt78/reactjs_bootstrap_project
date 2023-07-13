import { loadUsers } from '../features/UserSlice';
import { UsersQuery } from '../queries/UsersQuery';

/**
 * Asynchronní action creator, který načítá uživatele a dispečuje akci 'loadUsers'.
 * @function
 * @returns {Function} Funkce, která přijímá funkce 'dispatch' a 'getState' z Reduxu.
 */
export const UsersFetchAsync = () => (dispatch, getState) => {
  // Zavolá funkci UsersQuery pro načtení uživatelů
  UsersQuery()
    .then(response => response.json())
    .then(json => {
      // Extrahuje data o uživatelích z JSON odpovědi
      const usersPage = json.data?.userPage
      if (usersPage) {
        // Dispečuje akci 'loadUsers' s načtenými uživateli
        dispatch(loadUsers(usersPage))
      }
      return json
    })
}







