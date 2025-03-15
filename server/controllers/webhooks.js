import { Webhook } from "svix";
import User from "../models/User.js";

const clerkWevhooks = async (req, res)=> {
    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        await whook.verify(JSON.stringify(req.body),{
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        })

        const

    } catch (error) {

    }
}