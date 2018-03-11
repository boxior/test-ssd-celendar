import {createStore} from "redux";

function playlist(state = [], action) {
    if (action.type === "ADD_TRACK") {
        return [
            ...state,
            action.payload
        ]
    }
    return state;
}


export const store = createStore(playlist);
console.log("store", store);
store.subscribe(() => {
    console.log("subscribe", store.getState());
});

store.dispatch({type: "ADD_TRACK", payload: "Some text here"});
store.dispatch({type: "ADD_TRACK", payload: "Some big or small text here"});
