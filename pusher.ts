import Pusher from 'pusher';
import ClientPusher from 'pusher-js';
export const serverPusher = new Pusher({
  appId: '1505533',
  key: '49a276f4b4ec5986bd04',
  secret: process.env.PUSHER_SECRET!,
  cluster: 'ap1',
  useTLS: true,
});
export const clientPusher = new ClientPusher('49a276f4b4ec5986bd04', {
  cluster: 'ap1',
  forceTLS: true,
});
