import { createSlice } from "@reduxjs/toolkit";

const sidebarNavSlice = createSlice({
    name: 'sidebarNavSlice',
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        }
    }
});

export const {toggleMenu, closeMenu} = sidebarNavSlice.actions;
export default sidebarNavSlice.reducer;