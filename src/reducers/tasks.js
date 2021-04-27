import * as types from '../actions/actiontype'

var data = []
export default (state = data, action) => {
    switch (action.type) {
        case types.LiST_ALL:
            state = action.tasks;
            return [...state];
        default:
            return [...state];
    }
}