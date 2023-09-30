import { configureStore } from "@reduxjs/toolkit";
import sidebarNavSlice from "./sidebarNavSlice";

const store = configureStore({
    reducer: {
        sidebarNav: sidebarNavSlice
    }
})

export default store;