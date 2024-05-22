
import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from 'socket.io-client'


export const SocketContext = createContext()

// hook 
export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onLineUsers, setOnLineUsers] = useState([])
    const { authUser } = useAuthContext() //logged in user

    //socket io connection 
    useEffect(() => {
        if (authUser) {
            const socket = io("http://localhost:5000", {
                query: {
                    userId: authUser._id
                }
            })

            setSocket(socket);

            socket.on("getOnlineUsers", (users) => {
                setOnLineUsers(users) // set all users comming from backend
            })

            return () => socket.close()
        } else {
            if (socket) {
                socket.close()
                setSocket(null)
            }
        }
    }, [authUser])
    return <SocketContext.Provider value={{ onLineUsers, socket }}>
        {children}
    </SocketContext.Provider>
}