import { io, Socket } from "socket.io-client";
import { userDetailsStructure } from "../components/common/utils/commonInterfaces";

let socket: Socket;

export const connectWithSocketServer = (userDetails: userDetailsStructure) => {
    socket = io('http://localhost:5005', {
        auth: {
            jwtToken: userDetails.token
        }
    });

    socket.on('connect', () => {
        // console.log('successfully connected to the socket server.');
        // console.log(socket.id);
    })
}