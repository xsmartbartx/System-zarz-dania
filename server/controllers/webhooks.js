import { Webhook } from "svix";
import User from "../models/User.js";
import { request, response } from "express";

const clerkWebhooks = async (req, res) => {
    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        });

        const { data, type } = req.body;

        switch (type) {
            case 'user.created': {
                const userData = {
                    _id: data.id,
                    email: data.email_addresses[0].email_address,
                    name: data.first_name + " " + data.last_name,
                    ImageUrl: data.image_url,
                };
                await User.create(userData);
                res.json({});
                break;
            }

            case 'user.updated': {
                const userData = {
                    email: data.email_addresses[0].email_address,
                    name: data.first_name + " " + data.last_name,
                    ImageUrl: data.image_url,
                };
                await User.findByIdAndUpdate(data.id, userData);
                res.json({});
                break;
            }

            case 'user.deleted': {
                await User.findByIdAndDelete(data.id);
                res.json({});
                break;
            }

            default:
                break;
        }

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY)

export const stripeWebhooks = async(request, response)=>{
    const sig = request.headers['podpis-stripe'];

    let event;

    try {
        event = stripeInstance.webhooks.constructEvent(request.body, sig,
         process.env.STRIPE_WEBHOOK_SECRET);
    }
    catch (error) {
        response.status(400).send(`Webhook Error: ${error.message}`);
    }

    switch (event.type) {
        case 'payment_intent.succeeded':
            const paymentIntent = event.data.object;
            const paymentIntentId = paymentIntent.id;

            const session = await stripeInstance.checkout.sessions.list({
                payment_intent: paymentIntentId
            })

            const { purchaseId } = session.data[0].metadata;
            
            const purchaseData = await Purchase.findById(purchaseId)
            const userData = await User.findById(purchaseData.userId)
            const courseData = await Course.findById(purchaseData.courseId.toString())

            cou

            console.log('Płatność zakończona powodzeniem!');
            break;

        case 'payment_method.attached':
            const paymentMethod = event.data.object;
            console.log('Płatność dołączona do Kupującego!');
            break;
        default:
            console.log(`Nieobsługiwany typ zdarzenia ${event.type}`);
    }

    response.json({received: true});
}