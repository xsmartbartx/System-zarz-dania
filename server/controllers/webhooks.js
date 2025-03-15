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

        const {data, type} = req.body

        switch (type) {
            case 'user.creatted': {
                const userData = {
                    _id: data.id,
                    email: data.email_address[0].email_address,
                    name: data.first_name + " " + data.last_name,
                    ImageUrl: data.ImageUrl,
                }
                await User.create(userData)
                res.json({})
                break;
            }

                break;
                
            default:
                break;
        }

    } catch (error) {

    }
}