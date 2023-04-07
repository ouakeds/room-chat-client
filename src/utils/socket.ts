import { io } from 'socket.io-client';

const socketUrl = process.env.REACT_APP_API_URL ?? "http://localhost:8000";

export const socket = io(socketUrl);