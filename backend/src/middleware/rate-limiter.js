// Rate limiting middleware for signaling and webhook endpoints
// TODO: Enforce IP and device connection rate caps
export function rateLimiter(req, res, next) {
  next?.();
}
