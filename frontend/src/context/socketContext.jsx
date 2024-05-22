
import { createContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from 'socket.io-client'
export const SocketContext = createContext()
export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onLineUser, setOnLineUser] = useState([])
    const { authUser } = useAuthContext() //logged in user

    //socket io connection 
    useEffect(() => {
        if (authUser) {
            const socket = io("http://localhost:5000")

            setSocket(socket);

            return () => socket.close()
        } else {
            if (socket) {
                socket.close()
                setSocket(null)
            }
        }
    }, [])
    return <SocketContext.Provider value={{ onLineUser, socket }}>
        {children}
    </SocketContext.Provider>
}