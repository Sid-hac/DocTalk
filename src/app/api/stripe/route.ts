// /api/stripe

import { db } from "@/lib/db";
import { userSubscriptions } from "@/lib/db/schema";
import { stripe } from "@/lib/stripe";
import { auth, currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";


export const GET = async()  =>{

    const return_url = process.env.NEXT_BASE_URL + "/";

    try {
        
        const {userId} = auth();
        const user = currentUser()

        if(!userId) {
            return new NextResponse('unauthorized' , {status: 401})
        }

        const _userSubscriptions = await db.select().from(userSubscriptions).where(eq(userSubscriptions.userId , userId))

        if(_userSubscriptions[0] && _userSubscriptions[0].stripeCustomerId){
            // trying to cancel the subscription
            const stripSession = await stripe.billingPortal.sessions.create({
                customer: _userSubscriptions[0].stripeCustomerId,
                return_url,
            })
            return NextResponse.json({url : stripSession.url})
        }

        // user is firat time trying to subscribe

        const stripeSession = await stripe.checkout.sessions.create({
            success_url : return_url,
            cancel_url : return_url,
            payment_method_types : ["card"],
            mode : "subscription",
            billing_address_collection : "auto",
            // customer_email : user?.emailAddresses[0].emailAddress,
            line_items : [

                {
                    price_data : {
                        currency : "INR",
                        product_data : {
                            name : "DocTalk Pro",
                            description : "Unlimited PDF sessions"
                        },
                        unit_amount : 20000,
                        recurring : {
                            interval : "month",
                        }
                    },
                    quantity : 1,
                }
            ],
            metadata : {
                userId
            }

        })

        return NextResponse.json({url : stripeSession.url})

    } catch (error) {
        console.log(error);
        return new NextResponse('Internal Server Error' , {status: 500})
        
    }
}
