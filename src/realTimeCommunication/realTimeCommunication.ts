import { io, Socket } from "socket.io-client";
import { userDetailsStructure } from "../components/common/utils/commonInterfaces";
import store from "../store/store";
import {
  setPendingInvitationsList,
  setFriendsList,
} from "../store/actions/friendsActions";
import { pendingInvitations } from "../components/common/utils/commonInterfaces";
import {
  setChatDetailsAction,
  setChatMessagesAction,
} from "../store/actions/chatActions";

let socket: Socket;

export const connectWithSocketServer = (userDetails: userDetailsStructure) => {
  socket = io("http://localhost:5005", {
    auth: {
      jwtToken: userDetails.token,
    },
  });

  socket.on("connect", () => {
    // console.log('successfully connected to the socket server.');
    console.log(socket.id);
  });

  socket.on("friendInvitation", (data) => {
    const pendingInvitations = data.pendingInvitations.map(
      (currInvite: pendingInvitations) => {
        return currInvite.senderId;
      }
    );
    store.dispatch(setPendingInvitationsList([...pendingInvitations]));
  });

  socket.on("friendsListOnUpdate", (data) => {
    store.dispatch(setFriendsList([...data.friendsList]));
  });

  socket.on("direct-message-history", (data) => {
    const messages = data?.conversationObj?.messages;
    if (messages) {
      store.dispatch(setChatMessagesAction(messages));
    } else {
      store.dispatch(setChatMessagesAction([]));
    }
  });
};

export const logout = () => {
  socket.emit("disconnected");
};

export const sendMessage = (data: Object) => {
  socket.emit("direct-message", { ...data, socketId: socket.id });
};
