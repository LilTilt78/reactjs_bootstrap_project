import { createSlice } from "@reduxjs/toolkit";

/**
 * Redux slice pro správu stavu uživatelů.
 * @function
 */
export const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    /**
     * Reduktor pro načtení dat uživatelů.
     * @param {Array} state - Stav redukčního slicu.
     * @param {Object} action - Akce obsahující načítaná data.
     * @returns {Array} - Aktualizovaný stav redukčního slicu.
     */
    loadUsers: (state, action) => {
      const users = action.payload;
      state = [...state, ...users];
      return state;
    },
  },
});

// Export akce loadUsers z userSlice
export const { loadUsers } = userSlice.actions;

// Export reduktoru userSlice
export default userSlice.reducer;