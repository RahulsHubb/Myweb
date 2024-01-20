import React, { createContext } from 'react'

const UserContext = createContext({
    loggedUser: "Default User",
    author: "Rahul"
})

export default UserContext