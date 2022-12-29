import { io, Socket } from "socket.io-client";
import { userDetailsStructure } from "../components/common/utils/commonInterfaces";
import store from "../store/store";
import { setPendingInvitationsList, setFriendsList } from "../store/actions/friendsActions";
import { pendingInvitations } from "../components/common/utils/commonInterfaces";

export let socket: Socket;

export const connectWithSocketServer = (userDetails: userDetailsStructure) => {
    socket = io('http://localhost:5005', {
        auth: {
            jwtToken: userDetails.token
        },
    });

    socket.on('connect', () => {
        // console.log('successfully connected to the socket server.');
        // console.log(socket.id);
    });

    socket.on('friendInvitation', (data) => {
        const pendingInvitations = data.pendingInvitations.map((currInvite: pendingInvitations) => {
            return currInvite.senderId;
        })
        store.dispatch(setPendingInvitationsList([ ...pendingInvitations ]));
    })

    socket.on('friendsListOnStartup', (data) => {
        store.dispatch(setFriendsList([ ...data.friendsList ]))
    })

    socket.on('friendsListOnUpdate', (data) => {
        store.dispatch(setFriendsList([ ...data.friendsList ]))
    })


}