// Stripe webhook handler
// TODO: Verify Stripe webhook signature and update subscription state
export function handleStripeWebhook(event) {
  return { status: 'pending' };
}
