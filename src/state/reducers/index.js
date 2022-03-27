import { combineReducers} from "redux"
import {user,reducer}  from "./accountReducer"
const reducers=combineReducers({
    account:reducer,
    user:user
})
export default reducers