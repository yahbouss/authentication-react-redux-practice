import { combineReducers } from "redux";
import {auth} from "./auth";

const authenticator = combineReducers({
    auth
})

export default authenticator