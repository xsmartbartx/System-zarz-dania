import { Webhook } from "svix";
import User from "../models/User.js";

const clerkWebhooks = async (req, res)=> {
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

            case 'user.upated': {
                const userData = {
                    email: data.email_address[0].email_address,
                    name: data.first_name + " " + data.last_name,
                    ImageUrl: data.ImageUrl,
                }
                await User.findByIdAndUpdate(data.id, userData)
                res.json({})
                break;
            }

            case 'user.deleted' : {
                await User.findByIdAndDelete(data.id)
                res.json({})
                break;
            }

            default:
                break;
        }

    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export default Webhooks