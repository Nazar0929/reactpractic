import {createStore, combineReducers} from "redux"

import cardReduser from "./cardreducer"
const rootReducer = combineReducers({
    cards: cardReduser
})

export const store = createStore(rootReducer)