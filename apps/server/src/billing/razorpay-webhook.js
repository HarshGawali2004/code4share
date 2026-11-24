// Razorpay webhook handler
// TODO: Verify webhook signature and update user subscription status in Supabase
export function handleRazorpayWebhook(payload, signature) {
  return { status: 'pending' };
}
