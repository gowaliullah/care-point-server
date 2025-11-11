import Stripe from "stripe";

const handleStripeWebhookEvent = async(event : Stripe.Event) => {
    switch(event.type){
        case "checkout.session.completed": {
            const session = event.data.object as any;

            const appoinmentId = session.metadata?.appoinmentId;
            const paymentIntentId = session.payment_intent;
            const email = session.customer_email;


            break;
        }

        case "payment_intent.payment_failed": {
            const intent = event.data.object as any;
            console.log("Payment failed:", intent.id);

            break;
        }

        default: 
            console.log(`Unhandled event type: ${event.type}` );
    }
}


export const PaymentService = {
    handleStripeWebhookEvent
}