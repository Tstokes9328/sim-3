// Initial State
const initialState = {
    username: '',
    profile: '',
    userId: 0
}

//Action Type
const LOGGED_USER = "LOGGED_USER";

//Action Creator
export function loggedUser(userId, username, profile){
    return {
        type: LOGGED_USER,
        payload: {userId, username, profile}
    }
}

// Reducer Function
export default function reducer(state = initialState, action){
    switch(action.type){
        case LOGGED_USER:
            return Object.assign({}, state, {userId: action.payload.userId, username: action.payload.username, profile: action.payload.profile})
        default:
            return state;
    }
}