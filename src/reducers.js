import { configureStore } from "@reduxjs/toolkit";

import modalReducer from "./modalReducer"

const rootReducer = configureStore({
    reducer : modalReducer
})

export default rootReducer;