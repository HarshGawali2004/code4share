// Global error handling middleware
// TODO: Standardize JSON error responses without exposing internal stack traces
export function errorHandler(err, req, res, next) {
  res.writeHead?.(500, { 'Content-Type': 'application/json' });
  res.end?.(JSON.stringify({ error: 'Internal Server Error' }));
}
