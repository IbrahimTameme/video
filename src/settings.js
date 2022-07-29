import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "f1548589d6e444cc9ad123271b219441";
const token =
  "006f1548589d6e444cc9ad123271b219441IAAaWXr8XOTKBboyFwVi1yJlKgW+708XUHiWXot6LLxksZRdr8UAAAAAEACGukDPs3blYgEAAQCyduVi";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "Chat";
