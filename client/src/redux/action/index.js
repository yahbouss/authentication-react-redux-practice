export const login = (payload)=>({
    type : "LOGIN",
    payload:payload 
})

export const logout = ()=>({
    type : "LOGOUT", 
})

export const signup = (payload)=>({
    type : "SIGNUP",
    payload:payload 
})