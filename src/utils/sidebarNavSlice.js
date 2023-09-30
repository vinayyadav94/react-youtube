import { createSlice } from "@reduxjs/toolkit";

const sidebarNavSlice = createSlice({
    name: 'sidebarNavSlice',
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        }
    }
});

export const {toggleMenu} = sidebarNavSlice.actions;
export default sidebarNavSlice.reducer;