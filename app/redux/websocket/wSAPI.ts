import { io, Socket } from 'socket.io-client';

let socket: Socket | undefined = undefined;

export const connect = async (url: string): Promise<void> => {
  socket = io(url);

  socket.on('connect', () => {
    console.log(`Connected on ${url}`);
  });

  socket.on('exception', (data) => {
    console.log('event', data);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected');
  });
}
