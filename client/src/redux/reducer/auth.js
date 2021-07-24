export const auth = (state = {username:"", isAuthenticated: false}, action) => {
    switch (action.type) {
        case 'LOGIN':
            console.log(action.payload)
            return {...state, username: action.payload.username, isAuthenticated : true}
        case 'LOGOUT':
            return {...state, username: "", isAuthenticated : false}
        default:
            return state
    }
}
