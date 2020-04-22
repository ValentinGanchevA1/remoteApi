import {
    combineReducers
} from "redux";
import * as transfer from './transfer';


export default combineReducers({
    transfer: combineReducers(transfer),
});