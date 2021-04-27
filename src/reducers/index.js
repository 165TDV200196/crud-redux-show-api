import tasks from './tasks'
import { combineReducers } from "redux";

const all = combineReducers({
    tasks: tasks
})
export default all;