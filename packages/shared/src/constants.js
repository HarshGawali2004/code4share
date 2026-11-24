// Shared constants for code4share
export const DEFAULT_PLAN_LIMITS = {
  free: { sessionMinutes: 60, maxParticipants: 2 },
  pro: { sessionMinutes: 480, maxParticipants: 10 }
};

export const WS_EVENTS = {
  JOIN: 'room:join',
  OFFER: 'webrtc:offer',
  ANSWER: 'webrtc:answer',
  ICE_CANDIDATE: 'webrtc:ice'
};
